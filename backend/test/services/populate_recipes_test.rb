require "test_helper"

class PopulateRecipesTest < ActiveSupport::TestCase
  test "creates recipes from a json file" do
    file_path = "test/fixtures/files/recipes.json"

    assert_difference "Recipe.count", 4, "4 recipes should be created" do
      PopulateRecipes.call(file_path)
    end
  end

  test "raises error when file is not found" do
    file_path = "test/invalid_path.json"

    assert_no_difference "Recipe.count", "recipes should not be created" do
      PopulateRecipes.call(file_path)
    end
  end
end
