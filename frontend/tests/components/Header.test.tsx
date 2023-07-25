import { describe, expect, test } from "vitest"
import { Header } from "../../src/components/Header"
import { render, screen } from "@testing-library/react"
import React from "react"

describe("Header", () => {
  test("Should show title", () => {
    render(<Header />)

    expect(screen.getByText(/Recipes/i)).toBeDefined()
  })
})
