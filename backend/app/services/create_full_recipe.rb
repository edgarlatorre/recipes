class CreateFullRecipe
  def self.call(recipe_dto)
    ingredients = recipe_dto.ingredients.map { |description| Ingredient.new(description: description) }
    category = recipe_dto.category.present? ? Category.find_or_create_by(name: recipe_dto.category) : nil

    Recipe.create!(
      title: recipe_dto.title,
      cook_time: recipe_dto.cook_time,
      preparation_time: recipe_dto.preparation_time,
      ingredients: ingredients,
      ratings: recipe_dto.ratings,
      cuisine: recipe_dto.cuisine,
      category: category,
      author: recipe_dto.author,
      image: recipe_dto.image
    )
  end
end
