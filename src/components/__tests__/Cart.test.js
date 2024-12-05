import { render } from "@testing-library/react"
import RestaurantMenu from '../RestaurantMenu';
import { BrowserRouter, json } from "react-router-dom";
import act from 'react';
import '@testing-library/jest-dom';
import MOCK_DATA from '../mock/mockResMenu.json';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA)
    })
})
it("shoul load RestaurantMenu component",async()=>{
    await act(async()=>
        render(
            <BrowserRouter>
            <RestaurantMenu/>
            </BrowserRouter>

            
        )

    )

})