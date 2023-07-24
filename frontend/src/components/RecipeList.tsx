import { useQuery } from "@apollo/client/react/hooks"
import { GetRecipesDocument } from "../gql/graphql"
import { RecipeItem } from "./RecipeItem"

interface Props {
  ingredients: string[]
}

export const RecipeList = ({ ingredients }: Props) => {
  const { data } = useQuery(GetRecipesDocument, {
    variables: { ingredients: ingredients },
  })

  return data?.recipes.nodes?.map(
    (recipe) => recipe && <RecipeItem recipe={recipe} key={recipe.id} />
  )
}
