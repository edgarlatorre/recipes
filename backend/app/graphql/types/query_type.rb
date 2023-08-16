module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :recipes,
      Types::RecipeType.connection_type,
      null: false,
      connection: true,
      description: "Returns recipes",
      max_page_size: 30 do
      argument :ingredients, [String], required: :nullable
      argument :order_by, Types::RecipeOrderEnum, required: false
    end
    def recipes(ingredients:, order_by: "ratings_desc")
      order_param = Types::RecipeOrderEnum.to_param(order_by)

      return Recipe.order(order_param).by_ingredients(ingredients) if ingredients.present?

      Recipe.order(order_param).all
    end
  end
end
