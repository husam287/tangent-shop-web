import { render, screen } from "@testing-library/react"
import ProductCard from "."

describe("<ProductCard />", () => {
    it("should rendered", () => {

        render(<ProductCard />)
        const element = screen.getByTestId("ProductCard")

        expect(element).toBeInTheDocument()
    })
})