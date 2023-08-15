/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetNextRecipes($ingredients: [String!], $limit: Int!, $cursor: String) {\n  recipes(ingredients: $ingredients, first: $limit, after: $cursor) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        ratings\n        author\n        ingredients {\n          id\n          description\n        }\n        category {\n          name\n        }\n        image\n        createdAt\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}": types.GetNextRecipesDocument,
    "query GetPreviousRecipes($ingredients: [String!], $limit: Int!, $cursor: String) {\n  recipes(ingredients: $ingredients, last: $limit, before: $cursor) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        ratings\n        author\n        ingredients {\n          id\n          description\n        }\n        category {\n          name\n        }\n        image\n        createdAt\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}": types.GetPreviousRecipesDocument,
    "query GetRecipes($ingredients: [String!], $limit: Int!, $orderBy: RecipeOrderEnum) {\n  recipes(ingredients: $ingredients, first: $limit, orderBy: $orderBy) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        ratings\n        author\n        ingredients {\n          id\n          description\n        }\n        category {\n          name\n        }\n        image\n        createdAt\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}": types.GetRecipesDocument,
    "fragment RecipesPage on RecipeConnection {\n  edges {\n    cursor\n    node {\n      id\n      title\n      ratings\n      author\n      ingredients {\n        id\n        description\n      }\n      category {\n        name\n      }\n      image\n      createdAt\n      updatedAt\n    }\n  }\n  pageInfo {\n    endCursor\n    hasNextPage\n    hasPreviousPage\n    startCursor\n  }\n}": types.RecipesPageFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetNextRecipes($ingredients: [String!], $limit: Int!, $cursor: String) {\n  recipes(ingredients: $ingredients, first: $limit, after: $cursor) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        ratings\n        author\n        ingredients {\n          id\n          description\n        }\n        category {\n          name\n        }\n        image\n        createdAt\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}"): (typeof documents)["query GetNextRecipes($ingredients: [String!], $limit: Int!, $cursor: String) {\n  recipes(ingredients: $ingredients, first: $limit, after: $cursor) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        ratings\n        author\n        ingredients {\n          id\n          description\n        }\n        category {\n          name\n        }\n        image\n        createdAt\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPreviousRecipes($ingredients: [String!], $limit: Int!, $cursor: String) {\n  recipes(ingredients: $ingredients, last: $limit, before: $cursor) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        ratings\n        author\n        ingredients {\n          id\n          description\n        }\n        category {\n          name\n        }\n        image\n        createdAt\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}"): (typeof documents)["query GetPreviousRecipes($ingredients: [String!], $limit: Int!, $cursor: String) {\n  recipes(ingredients: $ingredients, last: $limit, before: $cursor) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        ratings\n        author\n        ingredients {\n          id\n          description\n        }\n        category {\n          name\n        }\n        image\n        createdAt\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRecipes($ingredients: [String!], $limit: Int!, $orderBy: RecipeOrderEnum) {\n  recipes(ingredients: $ingredients, first: $limit, orderBy: $orderBy) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        ratings\n        author\n        ingredients {\n          id\n          description\n        }\n        category {\n          name\n        }\n        image\n        createdAt\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}"): (typeof documents)["query GetRecipes($ingredients: [String!], $limit: Int!, $orderBy: RecipeOrderEnum) {\n  recipes(ingredients: $ingredients, first: $limit, orderBy: $orderBy) {\n    edges {\n      cursor\n      node {\n        id\n        title\n        ratings\n        author\n        ingredients {\n          id\n          description\n        }\n        category {\n          name\n        }\n        image\n        createdAt\n        updatedAt\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n      hasPreviousPage\n      startCursor\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RecipesPage on RecipeConnection {\n  edges {\n    cursor\n    node {\n      id\n      title\n      ratings\n      author\n      ingredients {\n        id\n        description\n      }\n      category {\n        name\n      }\n      image\n      createdAt\n      updatedAt\n    }\n  }\n  pageInfo {\n    endCursor\n    hasNextPage\n    hasPreviousPage\n    startCursor\n  }\n}"): (typeof documents)["fragment RecipesPage on RecipeConnection {\n  edges {\n    cursor\n    node {\n      id\n      title\n      ratings\n      author\n      ingredients {\n        id\n        description\n      }\n      category {\n        name\n      }\n      image\n      createdAt\n      updatedAt\n    }\n  }\n  pageInfo {\n    endCursor\n    hasNextPage\n    hasPreviousPage\n    startCursor\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;