import { render, screen } from "@testing-library/react"
import Contact from "../src/component/Contact"
import "@testing-library/jest-dom"

test('Should Load Contact Us Component', () => { 
    render(<Contact />);

    var heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
 });

test("Should Load Button inside Contact Us Component", () => {
    render(<Contact />);
    var button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})

test("Should Load a single input box with specified Placeholder inside Contact Us Component", () => {
    render(<Contact />);
    var input = screen.getByPlaceholderText("Name")
    expect(input).toBeInTheDocument();
})

test("Should Load all input boxes inside Contact Us Component", () => {
    render(<Contact />);
    var inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBeGreaterThan(0); // Ensure at least one textbox exists
    inputBoxes.forEach(input => expect(input).toBeInTheDocument());
})