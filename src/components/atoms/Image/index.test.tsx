import { render, screen } from "@testing-library/react"
import Image from "."

describe("<Image />", () => {
    it("should rendered", () => {
        const src = "/tangent-logo.jpeg"
        const alt = "test"

        render(<Image src={src} alt={alt} height="200" />)
        const element = screen.getByTestId("Image")

        expect(element).toBeInTheDocument()
    })
})