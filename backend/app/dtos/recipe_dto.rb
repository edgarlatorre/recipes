class RecipeDto
  def initialize(title:, cook_time:, preparation_time:, ingredients:, ratings:, cuisine:, category:, author:, image:)
    @title = title
    @cook_time = cook_time
    @preparation_time = preparation_time
    @ingredients = ingredients
    @ratings = ratings
    @cuisine = cuisine
    @category = category
    @author = author
    @image = image
  end

  attr_reader :title, :cook_time, :preparation_time, :ingredients, :ratings, :cuisine, :category, :author, :image
end
