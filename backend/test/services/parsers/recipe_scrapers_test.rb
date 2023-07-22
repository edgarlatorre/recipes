require "test_helper"

module Parsers
  class RecipeScrapersTest < ActiveSupport::TestCase
    test "parser recipe from recipe scrapers to a recipe dto" do
      recipe_hash = {
        "title" => "Bisquick® Blueberry Muffins",
        "cook_time" => 20,
        "prep_time" => 10,
        "ingredients" => [
          "2 cups Original Bisquick® mix",
          "⅔ cup milk",
          "⅓ cup sugar",
          "2 tablespoons vegetable oil",
          "1 egg",
          "¾ cup fresh or frozen (thawed and drained) blueberries"
        ],
        "ratings" => 4.0,
        "cuisine" => "",
        "category" => "Muffins",
        "author" => "Allrecipes Member",
        "image" => "https://images.com/image.jpg"
      }

      recipe = RecipeScrapers.parse(recipe_hash)

      assert recipe.title == "Bisquick® Blueberry Muffins"
      assert recipe.cook_time == 20
      assert recipe.preparation_time == 10
      assert recipe.ratings.to_d == BigDecimal("4.0")
      assert recipe.cuisine == ""
      assert recipe.category == "Muffins"
      assert recipe.author == "Allrecipes Member"
      assert recipe.image == "https://images.com/image.jpg"
      assert recipe.ingredients == [
        "2 cups Original Bisquick® mix",
        "⅔ cup milk",
        "⅓ cup sugar",
        "2 tablespoons vegetable oil",
        "1 egg",
        "¾ cup fresh or frozen (thawed and drained) blueberries"
      ]
    end
  end
end
