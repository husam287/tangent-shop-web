import { render, screen } from "@testing-library/react"
import ProductCard from "."
import PRODUCTS from "@/mockups/products"

describe("<ProductCard />", () => {
    it("should rendered", () => {
        const testProduct = PRODUCTS[0]

        render(<ProductCard product={testProduct} />)
        const element = screen.getByTestId("ProductCard")

        expect(element).toBeInTheDocument()
    })
})