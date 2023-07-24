# frozen_string_literal: true

module Types
  class RecipeType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :ratings, Float
    field :cook_time, Float
    field :preparation_time, Float
    field :image, String
    field :author, String
    field :cuisine, String
    field :category, CategoryType
    field :ingredients, [IngredientType]
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
