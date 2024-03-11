import { render, screen } from "@testing-library/react"
import CartSidebar from "."

describe("<CartSidebar />", () => {
    it("should rendered", () => {

        render(<CartSidebar />)
        const element = screen.getByTestId("CartSidebar")

        expect(element).toBeInTheDocument()
    })
})