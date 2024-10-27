import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom";


it("Should load header component with login btn",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginBtn=screen.getByRole("button",{name:"Login"});
    // const loginBtn=screen.getByText("Login");
    expect(loginBtn).toBeInTheDocument();
});


it("Should load header component with cart item as 0",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartItem=screen.getByText("Cart -(0 items in cart)");
    expect(cartItem).toBeInTheDocument();
});

it("Should load header component with cart item",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    // const cartItem=screen.getByText("/Cart/");
    // expect(cartItem).toBeInTheDocument();
});

it("Should Change Login Btn To Logout btn on Click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginBtn=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginBtn);
    const logoutBtn=screen.getByRole("button",{name:"Logout"});
    fireEvent.click(logoutBtn);
    expect(logoutBtn).toBeInTheDocument();
});