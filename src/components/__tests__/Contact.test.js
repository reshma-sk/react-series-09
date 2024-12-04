import { render,screen } from "@testing-library/react"
import Contact from '../Contact';
import "@testing-library/jest-dom";

describe("Contact us page test case",()=>{
    test("Should load Contact us component", () => {
      render(<Contact />);
      const heading = screen.getByRole("heading");
      //Assertion
      expect(heading).toBeInTheDocument();
    });
    test("Should load button inside Contact component",()=>{
        render(<Contact/>)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })
     
    test("should load input name inside Contact component", () => {
      render(<Contact />);
      const inputName = screen.getByPlaceholderText("Name");
      expect(inputName).toBeInTheDocument();
    });

    test("should load 2 input boxes on the Contac component",()=>{
      render(<Contact/>);
      const inputBoxes = screen.getAllByRole('textbox')
      expect(inputBoxes.length).toBe(3);

    })
})
//descripion
