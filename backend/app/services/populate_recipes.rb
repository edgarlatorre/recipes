class PopulateRecipes
  def self.call(file_path)
    content = File.read(file_path)
    recipes_hash = JSON.parse(content)

    recipes_hash.each do |recipe_param|
      recipe_dto = Parsers::RecipeScrapers.parse(recipe_param)
      p "Creating recipe: #{recipe_dto.title}"
      CreateFullRecipe.call(recipe_dto)
    end
  rescue Errno::ENOENT
    p "File #{file_path} not found"
  end
end
