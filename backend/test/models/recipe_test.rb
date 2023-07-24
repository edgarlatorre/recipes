require "test_helper"

class RecipeTest < ActiveSupport::TestCase
  test "#by_ingredients when ingredients is empty" do
    FactoryBot.create(:recipe)
    assert Recipe.by_ingredients([]).empty?
  end

  test "#by_ingredients when there is recipes with the ingredients" do
    FactoryBot.create(:recipe)
    assert Recipe.by_ingredients(["oil"]).count == 1
  end

  test "#by_ingredients when there is not recipes with the ingredients" do
    FactoryBot.create(:recipe)
    assert Recipe.by_ingredients(["tucupi"]).empty?
  end

  test "#by_ingredients when there recipes with at least on ingredient" do
    FactoryBot.create(:recipe)
    assert Recipe.by_ingredients(["oil", "tucupi"]).count == 1
  end

  test "#by_ingredients returns recipes with both ingredients" do
    first_recipe_ingredients = %w[oil tucupi banana].map do |ingredient|
      FactoryBot.build(:ingredient, description: ingredient)
    end

    second_recipe_ingredients = %w[oil tucupi fish].map do |ingredient|
      FactoryBot.build(:ingredient, description: ingredient)
    end

    FactoryBot.create(:recipe, ingredients: first_recipe_ingredients)
    FactoryBot.create(:recipe, ingredients: second_recipe_ingredients)

    assert Recipe.by_ingredients(["oil", "tucupi"]).length == 2
  end
end
