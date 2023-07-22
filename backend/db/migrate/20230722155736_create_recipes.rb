class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.float :ratings
      t.float :cook_time
      t.float :preparation_time
      t.string :image
      t.string :author
      t.string :cuisine
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
