import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("should render Hermes", () => {
    render(<App />)
    const linkElement = screen.getByText(/hermes/i)
    expect(linkElement).toBeInTheDocument()
})
