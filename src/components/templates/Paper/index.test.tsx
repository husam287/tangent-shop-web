import { render, screen } from "@testing-library/react"
import Paper from "."

describe("<Paper />", () => {
    it("should rendered", () => {

        render(<Paper />)
        const element = screen.getByTestId("Paper")

        expect(element).toBeInTheDocument()
    })
})