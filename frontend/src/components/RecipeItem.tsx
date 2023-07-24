import { Recipe } from "../gql/graphql"

interface Props {
  recipe: Recipe
}

export const RecipeItem = ({ recipe }: Props) => {
  return (
    <>
      <div className="p-4">
        <h3 className="text-2xl">{recipe.title}</h3>
        <p>
          by: <span className="text-">{recipe.author}</span>
        </p>
        <p className="">{recipe.category?.name}</p>
      </div>
      <div className="flex flex-row w-full items-stretch p-4 mb-8">
        <div className="w-full">
          {recipe.image && <img src={recipe.image} width={320} height={220} />}
        </div>
        <div className="w-full">
          <ul>
            {recipe.ingredients?.map((ingredient) => (
              <li key={ingredient.id} className="text-lg">
                {ingredient.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
