import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import firbaseConfigapp from "../../util/firebase-config";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const Auth = getAuth(firbaseConfigapp)
export default function Signup(){
  const navigate = useNavigate();
  const [value,setValue] = useState({ Name : '',
    Password : '',
    Mobile : '',
    Email : ''
   })
   const [loader,setLoader] = useState(false)
   const [error,setError] = useState('')
async function onSubmit(e){

  try {
    e.preventDefault();
    setLoader(true)
      await createUserWithEmailAndPassword(Auth,value.Email,value.Password)
      navigate('/')
    
  } catch (err) {
    setError(err.message)
  }
  finally{
    setLoader(false)
  }

}
 
   const [password,setPassword] = useState('password')
   function handleChange(e){
    const input = e.target;
    const ques = input.name;
    const ans = input.value;
    setValue({...value,[ques] : ans})
    setError(null)
   }
  return(<>

    <div className="grid  md:grid-cols-2 min-h-screen">
      <div className="flex justify-items-center items-center "><img className="md:flex md:justify-items-center md:h-[70%] h-[60%] " src="/Auth/1.svg" alt="" /></div>
      <div className="flex flex-col w-[70%] h-full justify-center items-center border-l-2 ">
    
      <h1 className="font-semibold text-lg">New User</h1>
      <p>Create a new Account Start Shopping</p>
      <form  className="space-y-4" >
        <div className="m-5 w-full rounded-md border-2 p-2 text-center items-center justify-items-center flex flex-col">

        <label>Name
          <input required name="Name" onChange={handleChange} className="focus:outline-none focus:ring-2 focus:ring-indigo-600 border-2 rounded-sm m-2 space-y-6" type="text"placeholder="Enter FirstName " />
        </label> <br />
        <label className=" relative">Password
          <input required onChange={handleChange}  name="Password" className="focus:outline-none focus:ring-2 focus:ring-indigo-600 border-2 rounded-sm px-1 m-2"   type={password} placeholder="Enter Password"  />
          <button onClick={()=>setPassword(  password === 'password' ? 'text' : 'password')} type="button" className="absolute top-2 left-60 hover:bg-blue-300 p-1 text-blue-700 rounded-full"> 
        { password === 'password'?    <IoEyeOutline /> : <FaRegEyeSlash />}
       
          
          </button>
         

        </label> <br />
        <label>Mobile
          <input required onChange={handleChange} name="Mobile" className="focus:outline-none focus:ring-2 focus:ring-indigo-600 border-2 rounded-sm  m-2" type="number"placeholder="Enter FirstName " />
        </label><br />
        <label>E-Mail
          <input required
           onChange={handleChange} name="Email" className="focus:outline-none focus:ring-2 focus:ring-indigo-600 border-2 rounded-sm  m-2" type="email"placeholder="Enter E-Mail " />
        </label> <br />

        
        <button onClick={onSubmit} className=" bg-indigo-600 m-2 p-2 rounded-md hover:bg-orange-500 text-white text-sm">Signup</button>
        <div className="flex text-center gap-2.5 text-sm"><h1>Already have an account?</h1> 
        <Link className="text-blue-600 hover:underline mb-3" to={'/Login'}>
        SignIn</Link> </div>
        
   
      {error &&  <div className= "text-xs bg-rose-600 p-3 rounded-md text-white">  
        <p>{error} </p>
        </div>}
        {loader && 'please wait...' }
   

        </div>
       
      </form>
      </div>
    </div>

  
  </>)
}