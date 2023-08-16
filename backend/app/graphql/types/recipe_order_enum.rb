module Types
  class RecipeOrderEnum < Types::BaseEnum
    value "title_asc"
    value "title_desc"
    value "ratings_asc"
    value "ratings_desc"

    def self.to_param(value)
      case value
      when "title_asc"
        {title: :asc}
      when "title_desc"
        {title: :desc}
      when "ratings_asc"
        {ratings: :asc}
      else
        {ratings: :desc}
      end
    end
  end
end
