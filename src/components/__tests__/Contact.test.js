import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test case",()=>{
    test("Should load contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    //WHETHER A BUTTON IS THERE OR NOT ON A PAGE.
    test("Should load Button inside  contact us component", () => {
        render(<Contact />);
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit"); //ANOTHER WAY
    
    
        expect(button).toBeInTheDocument();
    });
    
    it("Should load two ip boxes in a componenet",()=>{
        render(<Contact/>);
        const inputbox=screen.getAllByRole("textbox");
        //ASSERTION
        expect(inputbox.length).toBe(2);
    
    }) //We can replace test as it
})


