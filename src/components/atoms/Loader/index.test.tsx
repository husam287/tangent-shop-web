import { render, screen } from "@testing-library/react"
import Loader from "."

describe("<Loader />", () => {
    it("should rendered", () => {

        render(<Loader />)
        const element = screen.getByTestId("Loader")

        expect(element).toBeInTheDocument()
    })
})