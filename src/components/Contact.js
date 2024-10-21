import { useState } from "react";
import { CONTACT_IMG } from "../utils/constants";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

  };

  return (
    
      <div className="flex flex-col justify-between items-center  h-[60vh]">
        <div className="h-[40vh] my-10">
          <h1 className="font-bold text-lg">Contact us</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col h-[70vh]">
          <input type="text" placeholder="Name" required 
          className="w-[300px]  bg-gray-500 text-[15px] px-[10px] py-[8px] m-[10px]  
          rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]" />

          <input type="email" placeholder="Email" required
          className="w-[300px]  bg-gray-500 text-[15px] px-[10px] py-[8px] m-[10px]  
          rounded-md shadow-sm border border-[#818181] outline-none focus:border-[#74685a]"
           />
          <textarea placeholder="Type your Message here..." required 
          className="w-[300px]  bg-gray-500 text-[15px] px-[10px] py-[8px] m-[10px]  
          rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]"
          ></textarea>

          <button type="submit"
          className="w-[300px]  bg-gray-500 text-[15px] px-[10px] py-[8px] m-[10px]  
          rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]"
          >Submit</button>

          {message && (
            <span className="font-bold text-black">Thanks for contacting with Spoons & Forks, We will reply ASAP.</span>
          )}
        </form>

        
       
      </div>
   
  );
};

export default Contact;