import { fireEvent, render, screen } from '@testing-library/react'
import Button from '.'

describe('General <Button />', () => {
    it("show the text passed in the props", () => {
        const text = "test"

        render(<Button text={text} />)
        const element = screen.getByText(text)

        expect(element).toBeInTheDocument()
    })

    it("should call the passed function when clicked", () => {
        const mockFn = jest.fn();

        render(<Button onClick={mockFn}/>)
        const element = screen.getByTestId("button")
        fireEvent.click(element)
        
        expect(mockFn).toHaveBeenCalled()
    })
})

describe('Primary <Button />', () => {
    it("has primary btn class if it", () => {
        const className = /primary/

        render(<Button variant='primary' />)
        const element = screen.getByTestId("button")

        expect(element).toHaveClass(className)
    })
})

describe('Secondary <Button />', () => {
    it("has secondary btn class if it", () => {
        const className = /secondary/

        render(<Button variant='secondary' />)
        const element = screen.getByTestId("button")

        expect(element).toHaveClass(className)
    })
})