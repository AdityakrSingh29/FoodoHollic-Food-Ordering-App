import { render,screen } from "@testing-library/react"
import RestaurantCard from  "./../RestaurantCard";
import MOCK_DATA from "./../Mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should render restaurand card companent with props data",()=>{
    render(<RestaurantCard cardData={MOCK_DATA}/>);
    const name=screen.getByText("Domino's Pizza");
    expect(name).toBeInTheDocument();
});

it("should render restaurantCard component with promoted label",()=>{
    //hw--test HOC:WITHPROMOTOTEDLABEL
})