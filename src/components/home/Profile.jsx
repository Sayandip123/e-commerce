import Layout from "./Layout"

import { FaUser } from "react-icons/fa";
export default function Profile()
{
  return(<>
  <Layout> 
    <div className="mx-auto border-2 p-5 text-center mt-10 w-[80%] shadow-lg flex flex-col  justify-center gap-3  font-semibold items-center">
   <FaUser /> Profile

<br />
   <form className="grid grid-cols-2 gap-2 font-medium " ><label className="flex-col flex font-medium">Full Name <input className="rounded-md border-2 gap-4 p-2" type="text" placeholder="Enter full name"  /></label>
   
   <label className="flex-col flex">Email <input className="rounded-md border-2 gap-4 p-2" type="text" placeholder="Enter E-mail"  /></label>

   <label className="flex-col flex ">Mobile <input className="rounded-md border-2 gap-4 p-2" type="text" placeholder="Enter Mobile"  /></label>

   <label className="flex-col flex ">City<input className="rounded-md border-2 gap-4 p-2" type="text" placeholder="Enter City"  /></label>
   
   <label className="col-span-2 grid w-full">Area/Street/Colony<input className="rounded-md border-2  p-2" type="text" placeholder="Enter Area/Street"  /></label>

   <label className="flex-col flex ">PinCode<input className="rounded-md border-2 gap-4 p-2" type="text" placeholder="Enter PinCode"  /></label>
   
   <label className="flex-col flex ">Landmark<input className="rounded-md border-2 gap-4 p-2" type="text" placeholder="Enter Landmark"  /></label>
   </form>

   <button className="mx-auto bg-orange-600 p-2 rounded-md text-sm text-white px-3">Save</button>
       </div>

      
  
  </Layout>


  </>)
}