import { useQuery } from "@apollo/client"
import { GetRecipesDocument } from "./gql/graphql"
import { Search } from "./components/Search"
import { Header } from "./components/Header"

function App() {
  const { data } = useQuery(GetRecipesDocument)

  const onSubmit = (ingredients: string[]) => {
    console.log(ingredients)
  }

  return (
    <>
      <Header />
      <Search onSubmit={onSubmit} />

      <h3 className="text-2xl p-2">{data?.recipes[0].title}</h3>
    </>
  )
}

export default App
