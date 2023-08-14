import {
  GetRecipesQuery,
} from "../gql/graphql"
import { RecipeItem } from "./RecipeItem"

export const RecipeList = ({ recipes }: GetRecipesQuery) => {
  return (
    <div className="flex flex-col justify-center px-8 w-full">
      {recipes.edges?.map(
        (recipe) =>
          recipe?.node && (
            <RecipeItem
              recipe={recipe.node}
              key={`recipe-item-${recipe.node.id}`}
            />
          )
      )}
    </div>
  )
}
