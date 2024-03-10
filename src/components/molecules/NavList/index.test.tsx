import { render, screen } from "@testing-library/react"
import NavList from "."

describe("<NavList />", () => {
    it("should rendered", () => {

        render(<NavList />)
        const element = screen.getByTestId("NavList")

        expect(element).toBeInTheDocument()
    })
})