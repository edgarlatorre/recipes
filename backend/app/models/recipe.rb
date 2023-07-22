class Recipe < ApplicationRecord
  belongs_to :category, optional: true
  has_many :ingredients
end
