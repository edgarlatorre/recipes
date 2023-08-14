module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :recipes,
      Types::RecipeType.connection_type,
      null: false,
      connection: true,
      description: "Returns recipes",
      max_page_size: 100 do
      argument :ingredients, [String], required: :nullable
    end
    def recipes(ingredients:)
      return Recipe.by_ingredients(ingredients) if ingredients.present?

      Recipe.all
    end
  end
end
