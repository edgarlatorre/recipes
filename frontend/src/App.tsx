import { DocumentNode, useQuery } from "@apollo/client"
import { Search } from "./components/Search"
import { Header } from "./components/Header"
import { useState } from "react"
import { RecipeList } from "./components/RecipeList"
import { Navigation } from "./components/Navigation"
import { 
  GetNextRecipesDocument, 
  GetNextRecipesQueryVariables, 
  GetPreviousRecipesDocument, 
  GetPreviousRecipesQueryVariables, 
  GetRecipesDocument, 
  GetRecipesQueryVariables 
} from "./gql/graphql"

interface Params {
  query: DocumentNode
  variables: GetNextRecipesQueryVariables | GetPreviousRecipesQueryVariables | GetRecipesQueryVariables
}

const PER_PAGE = 15

function App() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [params, setParams] = useState<Params>({query: GetRecipesDocument, variables: {ingredients, limit: PER_PAGE}})

  const onSubmit = (ingredients: string[]) => {
    setIngredients(ingredients)
    setParams({
      query: GetRecipesDocument,
      variables: {
        ingredients: ingredients,
        limit: PER_PAGE
      },
    })
  }

  const { data } = useQuery(params.query, {
    variables: params.variables,
  })

  const onAction = (query: DocumentNode, cursor?: string | null | undefined) => {
    setParams({
      query: query,
      variables: {
        ingredients: ingredients,
        limit: PER_PAGE,
        cursor: cursor,
      },
    })
  }

  return (
    <>
      <Header />
      <Search onSubmit={onSubmit} />
      <Navigation 
        hasNext={data?.recipes.pageInfo.hasNextPage || false} 
        hasPrevious={data?.recipes.pageInfo.hasPreviousPage || false} 
        onNext={() => onAction(
          GetNextRecipesDocument,
          data?.recipes.pageInfo.endCursor
        )} 
        onPrevious={() => onAction(
          GetPreviousRecipesDocument,
          data?.recipes.pageInfo.startCursor,
        )} />
      {data !== undefined && <RecipeList recipes={data.recipes} />}
    </>
  )
}

export default App
