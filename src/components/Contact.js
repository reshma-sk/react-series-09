import { useState } from "react";
import { CONTACT_IMG } from "../utils/constants";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

  };

  return (
      <div className="flex flex-col justify-between items-center relative h-[80vh]">
        <div className="h-[40vh] my-10 mb-[-5.5rem]">
          <h1 className="font-bold text-lg">Contact us</h1>
        </div>

        <div>
          <form onSubmit={handleSubmit} 
           className="flex flex-col h-[50vh] 
           w-full mx-auto my-36 
         bg-black rounded-lg p-12 right-0 left-0
         text-white bg-opacity-85'">
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
            <span className="font-bold text-green-500">Thanks for contacting with Spoons & Forks, We will reply ASAP.</span>
           )}
         </form>

        </div>
        

        
       
      </div>
   
  );
};

export default Contact;