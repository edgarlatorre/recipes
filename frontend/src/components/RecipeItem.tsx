import { Recipe } from "../gql/graphql"

interface Props {
  recipe: Recipe
}

export const RecipeItem = ({ recipe }: Props) => {
  return (
    <div className="grid grid-cols-6 gap-4 p-12">
      <div className="col-start-2 col-end-4">
        <div>
          <h3 className="text-2xl">{recipe.title}</h3>
          <p>
            <span className="font-semibold">by:</span>{" "}
            <span>{recipe.author}</span>
          </p>
          <p>{recipe.category?.name}</p>
        </div>
        {recipe.image && <img src={recipe.image} width={320} height={220} />}
      </div>

      <div className="col-end-7 col-start-5">
        <h3 className="text-2xl mb-4">Ingredients</h3>
        <ul>
          {recipe.ingredients?.map((ingredient) => (
            <li key={`ingredient-${ingredient.id}`} className="text-lg">
              {ingredient.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
