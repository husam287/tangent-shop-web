import { render, screen } from "@testing-library/react"
import Image from "."

describe("<Image />", () => {
    it("should rendered", () => {

        render(<Image />)
        const element = screen.getByTestId("Image")

        expect(element).toBeInTheDocument()
    })
})