import { DocumentNode, useQuery } from "@apollo/client";
import { Search } from "./components/Search";
import { Header } from "./components/Header";
import { useState } from "react";
import { RecipeList } from "./components/RecipeList";
import { Navigation } from "./components/Navigation";
import {
  GetNextRecipesDocument,
  GetNextRecipesQueryVariables,
  GetPreviousRecipesDocument,
  GetPreviousRecipesQueryVariables,
  GetRecipesDocument,
  GetRecipesQueryVariables,
  RecipeOrderEnum,
} from "./gql/graphql";

interface Params {
  query: DocumentNode;
  variables:
    | GetNextRecipesQueryVariables
    | GetPreviousRecipesQueryVariables
    | GetRecipesQueryVariables;
}

const PER_PAGE = 15;

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [orderBy, setOrderBy] = useState<RecipeOrderEnum>(
    RecipeOrderEnum.RatingsDesc
  );
  const [params, setParams] = useState<Params>({
    query: GetRecipesDocument,
    variables: { ingredients, limit: PER_PAGE, orderBy: orderBy },
  });

  const onSubmit = (ingredients: string[]) => {
    setIngredients(ingredients);
    setParams({
      query: GetRecipesDocument,
      variables: {
        ingredients: ingredients,
        limit: PER_PAGE,
        orderBy: orderBy,
      },
    });
  };

  const onSort = (orderBy: RecipeOrderEnum) => {
    setOrderBy(orderBy);
    setParams({
      query: GetRecipesDocument,
      variables: {
        ingredients: ingredients,
        limit: PER_PAGE,
        orderBy: orderBy,
      },
    });
  };

  const { data } = useQuery(params.query, {
    variables: params.variables,
  });

  const onNavigate = (
    query: DocumentNode,
    cursor?: string | null | undefined
  ) => {
    setParams({
      query: query,
      variables: {
        ingredients: ingredients,
        limit: PER_PAGE,
        cursor: cursor,
      },
    });
  };

  return (
    <>
      <Header />
      <Search onSubmit={onSubmit} onSort={onSort} orderBy={orderBy} />
      <Navigation
        hasNext={data?.recipes.pageInfo.hasNextPage || false}
        hasPrevious={data?.recipes.pageInfo.hasPreviousPage || false}
        onNext={() =>
          onNavigate(GetNextRecipesDocument, data?.recipes.pageInfo.endCursor)
        }
        onPrevious={() =>
          onNavigate(
            GetPreviousRecipesDocument,
            data?.recipes.pageInfo.startCursor
          )
        }
      />
      {data !== undefined && <RecipeList recipes={data.recipes} />}
    </>
  );
}

export default App;
