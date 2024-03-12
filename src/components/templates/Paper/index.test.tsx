import { render, screen } from "@testing-library/react"
import Paper from "."

describe("<Paper />", () => {
    it("should rendered", () => {
        const input = "test"

        render(<Paper>{input}</Paper>)
        const element = screen.getByTestId("Paper")

        expect(element).toBeInTheDocument()
    })
})