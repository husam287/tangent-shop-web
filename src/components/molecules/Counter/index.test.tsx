import { render, screen } from "@testing-library/react"
import Counter from "."

describe("<Counter />", () => {
    it("should rendered", () => {

        render(<Counter />)
        const element = screen.getByTestId("Counter")

        expect(element).toBeInTheDocument()
    })
})