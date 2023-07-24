class Recipe < ApplicationRecord
  belongs_to :category, optional: true
  has_many :ingredients

  scope :by_ingredients, ->(ingredients) do
    ingredients_for_like = ingredients.map { |val| "%#{val}%" }
    joins(:ingredients).where("ingredients.description ILIKE ANY (array[?])", ingredients_for_like).uniq
  end
end
