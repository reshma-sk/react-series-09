import { render,screen } from "@testing-library/react"
import RestaurantCard,{withDiscountOffer}  from "../RestaurantCard"
import MOCK_DATA from '../../components/mock/resCardMock.json'
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should render RestaurantCard component with props data",()=>{
    render(
        <BrowserRouter>
        <RestaurantCard {...MOCK_DATA}/>
        </BrowserRouter>
    )
    const name = screen.getByText(MOCK_DATA.name);
    expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with discount data",()=>{
    const RestaurantCardWithDiscount = withDiscountOffer(RestaurantCard);
    render(
        <BrowserRouter>
        <RestaurantCardWithDiscount {...MOCK_DATA}/>
        </BrowserRouter>
    )
    const discountInfo = screen.getByText(/₹125 OFF/i);
    expect(discountInfo).toBeInTheDocument();
});




