import {  fireEvent, render,screen } from "@testing-library/react"
import Body from '../Body'
import MOCK_DATA from '../mock/mockResList.json'
import {act} from 'react';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


//This will give mock fetch funcion
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA)
        }
    })

});
it("should Search resList for burger test input",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
             <Body/>
            </BrowserRouter>
        )
    )  
    const cardsBeforeSearch = screen.getAllByTestId('resCard')
    expect(cardsBeforeSearch.length).toBe(20);
    const searchButton = screen.getByRole('button',{name:'Search'})
    const searchInput = screen.getByTestId('searchInput')
    fireEvent.change(searchInput,{target:{value:'burger'}})
    fireEvent.click(searchButton)
    expect(searchButton).toBeInTheDocument();
    const cardsAfterSearch = screen.getAllByTestId('resCard')
    expect(cardsAfterSearch.length).toBe(4)
})

it("should filter Top Rated restaurants",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
             <Body/>
            </BrowserRouter>
        )
    )
    const cardsBeforeFilter = screen.getAllByTestId('resCard')
    expect(cardsBeforeFilter.length).toBe(20);
    const topRatedBtn = screen.getByRole('button',{name:'Top Restaurants'})
    fireEvent.click(topRatedBtn)
    const cardsAfterFilter = screen.getAllByTestId('resCard')
    expect(cardsAfterFilter.length).toBe(13)

})
