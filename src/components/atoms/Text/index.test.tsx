import { render, screen } from "@testing-library/react"
import Text from "."

describe("<Text />", () => {
    it("should rendered", () => {

        render(<Text />)
        const element = screen.getByTestId("Text")

        expect(element).toBeInTheDocument()
    })
})