FactoryBot.define do
  factory :recipe do
    title { "Golden Sweet Cornbread" }
    cook_time { 25 }
    preparation_time { 10 }
    ingredients {
      [
        build(:ingredient, description: "1 cup all-purpose flour"),
        build(:ingredient, description: "1 cup yellow cornmeal"),
        build(:ingredient, description: "⅔ cup white sugar"),
        build(:ingredient, description: "1 teaspoon salt"),
        build(:ingredient, description: "3 ½ teaspoons baking powder"),
        build(:ingredient, description: "1 egg"),
        build(:ingredient, description: "1 cup milk"),
        build(:ingredient, description: "⅓ cup vegetable oil")
      ]
    }
    ratings { 4.74 }
    cuisine { "" }
    category { build(:category, name: "Cornbread") }
    author { "bluegirl" }
    image { "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F10%2F26%2Fcornbread-1.jpg" }
  end
end
