import { useState } from "react"
import { RecipeOrderEnum } from "../gql/graphql"

interface Props {
  onSubmit: (ingredient: string[]) => void
  onSort: (orderBy: RecipeOrderEnum) => void
}

export const Search = ({ onSubmit, onSort }: Props) => {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [ingredient, setIngredient] = useState("")

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    if (ingredient) {
      const newIngredients = ingredients.concat(ingredient)
      setIngredients(newIngredients)
      setIngredient("")
      onSubmit(newIngredients)
    }
  }

  const removeIngredient = (ingredient: string) => {
    const newIngredients = ingredients.filter((e) => e !== ingredient)
    setIngredients(newIngredients)
    onSubmit(newIngredients)
  }

  return (
    <div className="flex flex-col items-center w-full gap-3">
      <form onSubmit={submit} className="flex justify-center w-full">
        <input
          onChange={(e) => setIngredient(e.target.value)}
          type="search"
          id="default-search"
          className=" self-center w-2/5 border-gray-300 border-2 text-2l p-2"
          placeholder="Ingredients..."
          value={ingredient}
        />

        <select id="sort_by" className="m-8 py-3 px-4 pr-9 block border-gray-200 rounded-md text-sm focus:border-blue-800 focus:ring-blue-800" onChange={(e) => onSort(e.target.value as RecipeOrderEnum)}>
          <option selected value={RecipeOrderEnum.TitleAsc}>Order by</option>
          <option value={RecipeOrderEnum.TitleAsc}>Title ↑</option>
          <option value={RecipeOrderEnum.TitleDesc}>Title ↓</option>
          <option value={RecipeOrderEnum.RatingsAsc}>Ratings ↑</option>
          <option value={RecipeOrderEnum.RatingDesc}>Ratings ↓</option>
        </select>
      </form>
      <div className="flex flex-row">
        {ingredients.map((ingredient) => (
          <span
            key={ingredient}
            className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
          >
            {ingredient}
            <button
              type="button"
              onClick={() => removeIngredient(ingredient)}
              className="ml-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              <svg
                className="w-2 h-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </span>
        ))}
      </div>
    </div>
  )
}
