import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react"
import Layout from "./Layout"
import firbaseConfigapp from "../../util/firebase-config";
import { getFirestore,addDoc,collection } from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const authen = getAuth(firbaseConfigapp)
const db =  getFirestore(firbaseConfigapp)
export default function CustomerProduct(){
  const [session,setSession] = useState(null)
  const [products,setProducts] = useState([{
    title : 'New Men`s Blue Denim ',
    price : 2000,
    image : '/Products/a.jpg',
    discount : 10
  },
  {
    title : 'New Men`s Blue Denim ',
    price : 2000,
    image : '/Products/b.jpg',
    discount : 10
  },
  {
    title : 'New Men`s Blue Denim ',
    price : 2000,
    image : '/Products/c.jpg',
    discount : 10
  },{
    title : 'New Men`s Blue Denim ',
    price : 2000,
    image : '/Products/d.jpg',
    discount : 10
  },
  {
    title : 'New Men`s Blue Denim ',
    price : 2000,
    image : '/Products/e.jpg',
    discount : 10
  },
  {
    title : 'New Men`s Blue Denim ',
    price : 2000,
    image : '/Products/f.jpg',
    discount : 10
  },
  {
    title : 'New Men`s Blue Denim ',
    price : 2000,
    image : '/Products/g.jpg',
    discount : 10
  },
  {
    title : 'New Men`s Blue Denim ',
    price : 2000,
    image : '/Products/h.jpg',
    discount : 10
  },
  {
    title : 'New Men`s Blue Denim ',
    price : 2000,
    image : '/Products/i.jpg',
    discount : 10
  },
  {
    title : 'New Men`s Blue Denim ',
    price : 2000,
    image : '/Products/j.jpg',
    discount : 10
  },
  {
    title : 'New Men`s Blue Denim ',
    price : 2000,
    image : '/Products/k.jpg',
    discount : 10
  }])


  useEffect(()=>{
onAuthStateChanged( authen,(user)=>{
  if(user){
    setSession(user)
  }
  else
  setSession(false)
})

  },[])

    const addtocart = async (itm)=>{
        try {
          itm.userId = session.uid
          await addDoc(collection(db,'carts'),itm)
          toast.success('Item added to cart',{
            position:'top-right',
            autoClose : 2000
          })
          
        } catch (error) {
          toast.error('Failed to add to cart',{
            position : 'top-right',
            autoClose  : 2000
          })
          console.error(error)
        }
    }

  return(<>
  <Layout>

  <ToastContainer />

  <div className="m-2 w-[50%] font-semibold  text-center mx-auto">
 All Products
<h1 className="font-normal text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatem porro qui ipsum quas dolore error, officia magnam eligendi ipsam vero molestias quam quos expedita architecto accusamus iste facere. Pariatur.</h1>
 </div>
 
 <div className="grid sm:grid-cols-4 gap-5 ">
 {products.map((itm,inx)=>(
   <div key={inx} className="shadow-lg p-4" > 
  <img src={itm.image} alt="" />
  
   <h1 className="font-semibold flex "> ₹{itm.price-(itm.discount * itm.price)/100}
    
   <h1 className="text-red-500 ml-5 line-through">{itm.price} 
    
    </h1><h1 className="text-xs font-medium opacity-65">({itm.discount}%off)</h1> 
    </h1> 
    {itm.title}
 <br />
 <div className=" md:flex">
   <button className="bg-green-600 rounded-md p-2 flex m-1 mt-4 px-10 hover:bg-green-800 justify-self-center text-sm text-white">Buy Now</button>
 <button onClick={()=>addtocart(itm)} className="bg-indigo-600 mt-4 m-1 px-6 rounded-md  items-center gap-2 flex text-white text-sm hover:bg-indigo-800">
 <FaShoppingCart />
  Add To Cart</button> 
 </div>
   
  </div>))} </div>


    
  </Layout>
  
  </>)
}