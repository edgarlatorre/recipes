# As I was having issue populating the data on fly.io I've created this class to insert
# the everything using insert_all to improve the performance of the data creation.

class PopulateRecipesBruteForce
  def self.call(file_path)
    content = File.read(file_path)
    recipes_hash = JSON.parse(content)

    category_params = recipes_hash.map do |recipe_hash|
      recipe_hash["category"]
    end.uniq.map { |name| {name: name} }

    Category.insert_all(category_params)
    puts "Before creating categories"
    categories = Category.all.pluck(:name, :id).to_h

    puts "Before creating recipes"
    recipes = recipes_hash.map do |recipe_param|
      recipe_param["category_id"] = categories[recipe_param["category"]]
      recipe_param["preparation_time"] = recipe_param["prep_time"]
      recipe_param.except("prep_time", "category", "ingredients")
    end

    puts "Inserting #{recipes.count} recipes"
    recipes.each_slice(1000) { |batch| Recipe.insert_all(batch) }

    recipe_ids = Recipe.all.map { |rec| ["#{rec.author}:#{rec.title}", rec.id] }.to_h

    ingredients = recipes_hash.map do |recipe_param|
      key = "#{recipe_param["author"]}:#{recipe_param["title"]}"
      recipe_id = recipe_ids[key].present? ? recipe_ids[key].to_i : nil
      recipe_param["ingredients"].map { |desc| {description: desc, recipe_id: recipe_id} }
    end.flatten

    puts "Inserting #{ingredients.count} ingredients"
    ingredients.each_slice(1000) { |batch| Ingredient.insert_all(batch) }

    puts "Finished"
  rescue Errno::ENOENT
    p "File #{file_path} not found"
  end
end
