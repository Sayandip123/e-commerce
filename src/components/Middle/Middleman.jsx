import { getAuth, onAuthStateChanged } from "firebase/auth"
import firbaseConfigapp from "../../util/firebase-config"
import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const author =  getAuth(firbaseConfigapp)
export default function Middleman(){
  const [session,setSession] = useState(null)
  useEffect(()=>{
       onAuthStateChanged(author ,(user) =>{
        if(user){
          setSession(user)
        }
        else{
        setSession(false)
        }
      } )

    
  }
  ,[])
if(session === null) {  
  
}
if(session){
  return <Navigate to= "/"  />
}
return <Outlet/>
} 