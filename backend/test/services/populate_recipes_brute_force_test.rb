require "test_helper"

class PopulateRecipesBruteForceTest < ActiveSupport::TestCase
  test "creates recipes from a json file" do
    file_path = "test/fixtures/files/recipes.json"

    assert_difference "Recipe.count", 4, "4 recipes should be created" do
      PopulateRecipesBruteForce.call(file_path)
    end
  end

  test "ensure ingredients belongs to right recipe" do
    file_path = "test/fixtures/files/recipes.json"
    PopulateRecipesBruteForce.call(file_path)

    recipe = Recipe.find_by(title: "Golden Sweet Cornbread")

    expected_ingredients = [
      "1 cup all-purpose flour",
      "1 cup yellow cornmeal",
      "⅔ cup white sugar",
      "1 teaspoon salt",
      "3 ½ teaspoons baking powder",
      "1 egg",
      "1 cup milk",
      "⅓ cup vegetable oil"
    ]

    assert_same_elements expected_ingredients, recipe.ingredients.map(&:description)
  end

  test "raises error when file is not found" do
    file_path = "test/invalid_path.json"

    assert_no_difference "Recipe.count", "recipes should not be created" do
      PopulateRecipesBruteForce.call(file_path)
    end
  end
end
