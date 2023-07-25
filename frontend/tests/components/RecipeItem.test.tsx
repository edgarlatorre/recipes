import { beforeEach, describe, expect, test } from "vitest"
import { RecipeItem } from "../../src/components/RecipeItem"
import { render, screen } from "@testing-library/react"
import React from "react"

describe("RecipeItem", () => {
  beforeEach(async () => {
    await render(<RecipeItem recipe={recipe} />)
  })

  const recipe = {
    id: "1",
    title: "Best Whole Grain Gluten-Free Bread for a Bread Machine",
    ratings: 5,
    author: "Josef K.",
    ingredients: [
      { description: "1 cup cornstarch" },
      { description: "½ cup millet flour" },
      { description: "½ cup tapioca starch" },
      { description: "¼ cup sweet rice flour" },
      { description: "¼ cup teff flour" },
      { description: "¼ cup ground flax" },
      { description: "2 tablespoons psyllium husk" },
      { description: "2 ½ teaspoons guar gum" },
      { description: "2 large eggs" },
      { description: "1 ⅔ cups warm water" },
      { description: "3 tablespoons canola oil" },
      { description: "1 teaspoon white vinegar" },
      { description: "2 ¾ teaspoons active dry yeast" },
      { description: "1 ½ teaspoons salt" },
      { description: "½ cup milk powder" },
      { description: "3 tablespoons white sugar" },
    ],
    category: { name: "Yeast Bread" },
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4555306.jpg",
    createdAt: "2023-07-25T20:14:26Z",
    updatedAt: "2023-07-25T20:14:26Z",
  }

  test("Should show recipe title", () => {
    expect(
      screen.getByText(/Best Whole Grain Gluten-Free Bread for a Bread Machine/)
    ).toBeDefined()
  })

  test("Should show ingredients", () => {
    expect(screen.getByText(/Ingredients/)).toBeDefined()

    expect(screen.getByText(/1 cup cornstarch/)).toBeDefined()
    expect(screen.getByText(/½ cup millet flour/)).toBeDefined()
    expect(screen.getByText(/½ cup tapioca starch/)).toBeDefined()
    expect(screen.getByText(/¼ cup sweet rice/)).toBeDefined()
    expect(screen.getByText(/¼ cup teff flour/)).toBeDefined()
    expect(screen.getByText(/¼ cup ground flax/)).toBeDefined()
    expect(screen.getByText(/2 tablespoons psyllium husk/)).toBeDefined()
    expect(screen.getByText(/2 ½ teaspoons guar/)).toBeDefined()
    expect(screen.getByText(/2 large eggs/)).toBeDefined()
    expect(screen.getByText(/1 ⅔ cups warm/)).toBeDefined()
    expect(screen.getByText(/3 tablespoons canola oil/)).toBeDefined()
    expect(screen.getByText(/1 teaspoon white vinegar/)).toBeDefined()
    expect(screen.getByText(/2 ¾ teaspoons active/)).toBeDefined()
    expect(screen.getByText(/1 ½ teaspoons salt/)).toBeDefined()
    expect(screen.getByText(/½ cup milk powder/)).toBeDefined()
    expect(screen.getByText(/3 tablespoons white sugar/)).toBeDefined()
  })

  test("Should show author", () => {
    expect(screen.getByText(/Josef K./)).toBeDefined()
  })

  test("Should show category", () => {
    expect(screen.getByText(/Yeast Bread/)).toBeDefined()
  })
})
