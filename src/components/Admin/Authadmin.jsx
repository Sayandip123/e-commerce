   
   
   
   export default function Authadmin(){
  return(<>
  <div className="min-h-screen  bg-slate-200 gap-5 p-10 flex items-center">
  

 
      <img className="h-[80vh]" src="/Products/admin.png" alt="" />

      
      <div className="h-[60vh] border-2  flex-col px-5 border-[#403e57] rounded-md "  > 
      
<div className="mb-2 mt-12  border-2 bg-[#6b63ff]  font-semibold p-3 rounded-md w-fit mx-auto text-white ">Admin Login </div>


<form >
<label >Username
<input  className="border-2 m-5 rounded-md p-2" name="Username" type="text" placeholder="Enter Username" />
</label>    
<br />  
<label >Password
<input className="border-2 rounded-md m-5 p-2" type="password" placeholder="Enter Password" />
</label> 
<br />
<div className="flex justify-center m-12  "> 

<button className=" text-white p-3 bg-[#6b63ff]  rounded-l-md">Signin</button>
<button className="  p-3 border-2 font-medium border-[#6b63ff] text-[#6b63ff] rounded-r-md">Signup</button>

</div>

  
</form>
</div>
         </div>
      
  
  </>)
}