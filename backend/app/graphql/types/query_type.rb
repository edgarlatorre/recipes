module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :recipes,
      Types::RecipeType.connection_type,
      null: false,
      connection: true,
      description: "Returns recipes",
      max_page_size: 15 do
      argument :ingredients, [String], required: :nullable
    end
    def recipes(ingredients:)
      return Recipe.by_ingredients(ingredients) if ingredients

      Recipe.all
    end
  end
end
