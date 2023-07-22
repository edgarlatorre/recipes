namespace :populate do
  desc "Read json file containing recipes then save them in the database"
  task from_json_file: :environment do |_, args|
    PopulateRecipes.call("resources/recipes-en.json")
  end
end
