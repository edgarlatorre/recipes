import { useQuery } from "@apollo/client"
import "./App.css"
import { GetRecipesDocument } from "./gql/graphql"

function App() {
  const { data } = useQuery(GetRecipesDocument)
  console.log(data)

  return data?.recipes.map((recipe) => <h2>{recipe.title}</h2>)
}

export default App
