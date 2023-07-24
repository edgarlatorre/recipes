import { useState } from "react"

interface Props {
  onSubmit: (ingredient: string[]) => void
}

export const Search = ({ onSubmit }: Props) => {
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
      </form>
      <div className="flex flex-row">
        {ingredients.map((ingredient) => (
          <span
            key={ingredient}
            onClick={() => removeIngredient(ingredient)}
            className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
          >
            {ingredient}
          </span>
        ))}
      </div>
    </div>
  )
}
