import { render,screen } from "@testing-library/react"
import About from "../About"
import "@testing-library/jest-dom";
import { LOGO_URL } from "../../utils/constants";

it("should render wthout crash",()=>{
    render(<About/>)
})

/*it("should render welcome text correctly",()=>{
    render(<About/>)
    expect(screen.getByText(/welcome to the world of/i)).toBeInTheDocument()
})

it("image has correct src and alt attributes",()=>{
    render(<About/>)
    const image = screen.getByAltText("Food Image")
    expect(image).toHaveAttribute('src', LOGO_URL)
})

it("applies correct styles",()=>{
    render(<About/>)
    const heading = screen.getByText(/welcome to the world of/i)
    const spanElemen = screen.getByText(/Spoons & Forks/i,{selector:"span.bg-orange-400"})
    expect(heading).toHaveClass("font-bold text-3xl text-gray-500 m-1")  
    expect(spanElemen).toHaveClass("bg-orange-400 rounded-md text-black m-4")   
})*/