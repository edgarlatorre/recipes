require "test_helper"

class CreateFullRecipeTest < ActiveSupport::TestCase
  test "creates recipe and dependencies from dto" do
    recipe_dto = recipe_dto(category: "Muffins")

    assert_difference "Recipe.count", 1, "A recipe should be created" do
      assert_difference "Category.count", 1, "A category should be created" do
        assert_difference "Ingredient.count", 6, "6 ingredients should be created" do
          CreateFullRecipe.call(recipe_dto)
        end
      end
    end
  end

  test "creates recipe and dependencies from dto when category is empty" do
    assert_difference "Recipe.count", 1, "A recipe should be created" do
      assert_no_difference "Category.count", "A category should not be created" do
        assert_difference "Ingredient.count", 6, "6 ingredients should be created" do
          CreateFullRecipe.call(recipe_dto)
        end
      end
    end
  end

  private

  def recipe_dto(category: "")
    RecipeDto.new(
      title: "Bisquick® Blueberry Muffins",
      cook_time: 0,
      preparation_time: 10,
      ingredients: [
        "2 cups Original Bisquick® mix",
        "⅔ cup milk",
        "⅓ cup sugar",
        "2 tablespoons vegetable oil",
        "1 egg",
        "¾ cup fresh or frozen (thawed and drained) blueberries"
      ],
      ratings: 4.0,
      cuisine: "",
      category: category,
      author: "Allrecipes Member",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4560905.jpg"
    )
  end
end
