import { render, screen } from "@testing-library/react"
import ProductsList from "."

describe("<ProductsList />", () => {
    it("should rendered", () => {

        render(<ProductsList />)
        const element = screen.getByTestId("ProductsList")

        expect(element).toBeInTheDocument()
    })
})