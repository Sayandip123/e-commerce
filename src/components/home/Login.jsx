import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firbaseConfigapp from "../../util/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function Login(){
  const navigate = useNavigate();
  const auth = getAuth(firbaseConfigapp);
    const [err,setErr] = useState(false)
    const [loading,setLoading] = useState(false)
   const [password,setPassword] = useState('password')
   const [value,setValue] = useState({
    Email : '',
    Pass : ''
   })
   async function  userauthen(e){
    e.preventDefault();
    try { setLoading(true)
     const user = await  signInWithEmailAndPassword(auth, value.Email, value.Pass)
     console.log(user)
     navigate('/')
     
    } catch (error) {
     console.log(error)
     setErr('Invalid Email or Password ')
    }
  finally{
    setLoading(false)
  }
   }
   function Inp(e){
    const input = e.target
    const name = input.name;
    const val = input.value;
     setValue({...value,[name]:val})
    setErr(false)
   }
  return(<>

    <div className="grid  md:grid-cols-2 min-h-screen">
      <div className="flex justify-items-center items-center "><img className="md:flex md:justify-items-center md:h-[70%] h-[60%] " src="/Auth/1.svg" alt="" /></div>
      <div className="flex flex-col w-[70%] h-full justify-center items-center border-l-2 ">
      <h1 className="font-bold text-xl tracking-wide">SignIn</h1>
      <p>Enter Profile details to Shop with Us</p>
      <form  className="space-y-4" >
        <div className="m-5 w-full rounded-md border-2 p-2 text-center justify-self-center mx-1 items-center justify-items-center flex flex-col">

        
       

        <label>E-Mail
          <input onChange={Inp} name="Email" className="focus:outline-none focus:ring-2 focus:ring-indigo-600 border-2 rounded-sm  px-2 m-2" type="text"placeholder="Enter E-Mail " />
        </label> <br />
        <label className=" relative">Password
          <input onChange={Inp} name="Pass"  className="focus:outline-none focus:ring-2 focus:ring-indigo-600 border-2 rounded-sm px-1 m-2"   type={password}  placeholder="Enter Password"  />
          <button onClick={()=>setPassword(  password === 'password' ? 'text' : 'password')} type="button" className="absolute top-2 left-60 hover:bg-blue-300 p-1 text-blue-700 rounded-full"> 
        { password === 'password'?    <IoEyeOutline /> : <FaRegEyeSlash />}
       
          
          </button>
         

        </label> <br />
      
        <button onClick={userauthen} className=" bg-indigo-600 m-2 px-4 p-2 rounded-md hover:bg-orange-500 text-white text-sm">Login</button>
        <div className="flex text-sm text-center m-2 items-center gap-2"> 
        <h1>Don't have an Account?</h1>
        <Link className="hover:underline text-blue-600 border-black"  to={'/signup'}>Register Now </Link> 
        </div>
         
        {err && <p className=" mb-4 text-xs text-white p-2 bg-rose-600 rounded-md">{err}</p> }
        {loading && 'Loading...'}
        
        </div>
        
       
      </form>
      </div>
    </div>

  
  </>)
}