import { render, screen } from "@testing-library/react"
import ProductsList from "."
import PRODUCTS from "@/mockups/products"

describe("<ProductsList />", () => {
    it("should rendered", () => {
        const input = PRODUCTS

        render(<ProductsList products={input} />)
        const element = screen.getByTestId("ProductsList")

        expect(element).toBeInTheDocument()
    })
})