# frozen_string_literal: true

module Types
  class CategoryType < Types::BaseObject
    field :id, ID, null: true
    field :name, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: true
  end
end
