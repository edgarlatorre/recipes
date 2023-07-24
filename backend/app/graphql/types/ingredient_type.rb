# frozen_string_literal: true

module Types
  class IngredientType < Types::BaseObject
    field :id, ID, null: true
    field :description, String
    field :recipe_id, Integer, null: true
    field :recipe, RecipeType, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: true
  end
end
