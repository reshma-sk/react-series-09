import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from '../../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Header component with login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByText('Login',{name:'Login'});
    expect(loginButton).toBeInTheDocument();
});

/*it("should load Header component with logout button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    const logoutItem = screen.getByTestId('logoutbtn');
    expect(logoutItem).toBeInTheDocument();
});*/

it("should load Header component with a Cart Items 0",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText('Cart');
    expect(cartItems).toBeInTheDocument();
});

it("should load Header component with a Cart item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});

/*it("should change Login button to Logout on click",()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByText('Login')
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button',{name:'Logout'})
    console.log(logoutButton);
    
    expect(logoutButton).toBeInTheDocument();
})*/
