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

  return (
    <div className="flex flex-col justify-center px-8 w-full">
      {data?.recipes.nodes?.map(
        (recipe) => recipe && <RecipeItem recipe={recipe} key={recipe.id} />
      )}
    </div>
  )
}
