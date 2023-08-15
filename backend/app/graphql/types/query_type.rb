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
      allowed_order = {
        "title_asc" => {title: :asc},
        "title_desc" => {title: :desc},
        "ratings_asc" => {ratings: :asc},
        "ratings_desc" => {ratings: :desc}
      }

      return Recipe.order(allowed_order[order_by]).by_ingredients(ingredients) if ingredients.present?

      Recipe.order(allowed_order[order_by]).all
    end
  end
end
