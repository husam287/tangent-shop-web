import { render, screen } from "@testing-library/react"
import PaginationBar from "."

describe("<PaginationBar />", () => {
    it("should rendered", () => {

        render(<PaginationBar />)
        const element = screen.getByTestId("PaginationBar")

        expect(element).toBeInTheDocument()
    })
})