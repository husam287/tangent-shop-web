import { render, screen } from "@testing-library/react"
import Navbar from "."

describe("<Navbar />", () => {
    it("should rendered", () => {

        render(<Navbar />)
        const element = screen.getByTestId("Navbar")

        expect(element).toBeInTheDocument()
    })
})