import { Search } from "./components/Search"
import { Header } from "./components/Header"
import { useState } from "react"
import { RecipeList } from "./components/RecipeList"

function App() {
  const [ingredients, setIngredients] = useState<string[]>([])

  const onSubmit = (ingredients: string[]) => {
    setIngredients(ingredients)
    console.log(ingredients)
  }

  return (
    <>
      <Header />
      <Search onSubmit={onSubmit} />
      <RecipeList ingredients={ingredients} />
    </>
  )
}

export default App
