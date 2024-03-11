import { render, screen } from "@testing-library/react"
import CartItem from "."

describe("<CartItem />", () => {
    it("should rendered", () => {

        render(<CartItem />)
        const element = screen.getByTestId("CartItem")

        expect(element).toBeInTheDocument()
    })
})