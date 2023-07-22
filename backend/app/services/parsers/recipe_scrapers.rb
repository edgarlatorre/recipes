module Parsers
  class RecipeScrapers
    def self.parse(recipe_hash)
      RecipeDto.new(
        title: recipe_hash["title"],
        cook_time: recipe_hash["cook_time"],
        preparation_time: recipe_hash["prep_time"],
        ingredients: recipe_hash["ingredients"],
        ratings: recipe_hash["ratings"],
        cuisine: recipe_hash["cuisine"],
        category: recipe_hash["category"],
        author: recipe_hash["author"],
        image: recipe_hash["image"]
      )
    end
  end
end
