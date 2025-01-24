import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import { CgProfile } from "react-icons/cg";
import firbaseConfigapp from "../../util/firebase-config";
import { BiCart } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function Layout({ children }) {
  const [Info,setInfo] = useState(false)
  const [open,setOpen] = useState(false)
  const [menus, setMenus] = useState([
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Category", link: "/category" },
    { label: "Contact Us", link: "/contactus" },
  ]);
const [session,setSession] = useState(false)
const auth = getAuth(firbaseConfigapp)
useEffect (()=> {
  onAuthStateChanged(auth, (user) => {
    if (user) {
    setSession(user)
    } else {
    setSession(false)
    }
  });

},[])

if (session === null){
  return( <div className="flex h-screen justify-center items-center">
    <div className=" w-full max-w-sm rounded-md border bg-gray-700 border-blue-300 p-4">
  <div className="flex animate-pulse space-x-4">
    <div className="size-10 rounded-full bg-gray-200"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 rounded bg-gray-200"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-gray-200"></div>
          <div className="col-span-1 h-2 rounded bg-gray-200"></div>
        </div>
        <div className="h-2 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
</div>

  </div> 
  )
}
  return (
    <>
      <div className="min-h-screen">
        {/* Navigation Bar */}
        <nav className="sm:sticky top-0 left-0 bg-white shadow-md px-2 py-2 z-50">
  <button
    onClick={() => setOpen(!open)}
    className="justify-self-end p-3 rounded-md hover:bg-indigo-600 hover:text-white text-indigo-600 flex"
  >
    <i className="md:hidden ri-menu-line"></i>
  </button>
  <div className="flex justify-between items-center">
    {/* Logo */}
    <img
      className="h-16"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjPiofSzqJ48-O6fcABJPxUURJJmXfkF9vcw&s"
      alt="Brand Logo"
    />

    {/* Menu Links */}
    <div className="hidden md:flex items-center gap-4">
      {menus.map((item, index) => (
        <Link
          className="m-2 p-3 text-gray-700 hover:bg-gray-200 hover:text-black rounded-md transition-colors"
          key={index}
          to={item.link}
        >
          {item.label}
        </Link>
      ))}

      {/* Contact Us with User Picture */}
      <div className="flex items-center gap-2">
        
        {/* User Picture */}
        {session && ( <>

        <button onClick={()=> setInfo(!Info)}> 

        <img className="h-10 rounded-full  object-cover cursor-pointer relative "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwGub6dzbO-T9reIbMngRj8jFqy57J0uZHA&s"
            
          />
        </button>
      {Info && <div className="h-40 w-36 rounded-md absolute bg-white border-[#dadada7b] border-2 shadow-2xl top-20 right-5  flex flex-col justify-center ">

        <Link to={'/myprofile'} className="opacity-70 text-sm hover:bg-slate-200  gap-4 flex items-center text-left justify-between p-2 ">
         <div className="text-lg">< CgProfile />  </div>   My profile</Link>

         
        <Link to={'/cart'} className="opacity-70 text-sm hover:bg-slate-200 p-[6px] mt-2 gap-4 flex items-center pr-11 text-left justify-between ">
         <div className="text-lg"> <BiCart />  </div>  Cart</Link>

         
        <button onClick={()=> signOut(auth)} className="opacity-70 text-sm hover:bg-slate-200 mt-2 gap-4 flex items-center p-2 text-left justify-between pr-6 ">
         <div className="text-lg">
          < RiLogoutCircleLine  />  </div>  Logout </button>

</div> }
        
           
         </>
     
        )}
      </div>

      {/* Login/Signup Links */}
      {!session && (
        <>
          <Link
            className="text-white text-sm px-4 py-2 m-2 rounded-lg bg-black hover:bg-indigo-600"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-white text-sm px-4 py-2 rounded-lg bg-black hover:bg-indigo-600"
            to="/signup"
          >
            Signup
          </Link>
        </>
      )}
    </div>
  </div>
</nav>


        {/* Page Content */}
        <div className="px-8 py-6">{children}</div>

        {/* Footer Section */}
        <footer className="w-full grid grid-cols-4 gap-8 px-8 py-8 bg-gray-100">
          {/* Website Links */}
          <div>
            <h1 className="font-bold text-lg mb-4">Website Links</h1>
            {menus.map((item, index) => (
              <Link
                className="block mb-2 text-gray-700 hover:text-indigo-600"
                key={index}
                to={item.link}
              >
                {item.label}
              </Link>
            ))}
            <Link className="block mb-2 text-gray-700 hover:text-indigo-600" to={"/login"}>
              Login
            </Link>
            <Link className="block text-gray-700 hover:text-indigo-600" to={"/signup"}>
              Signup
            </Link>
          </div>

          {/* Social Media Links */}
          <div >
            <h1 className="font-bold text-lg mb-4">Follow Us</h1>
            <Link className="block mb-2 text-gray-700 hover:text-indigo-600" to="#">
              Facebook
            </Link>
            <Link className="block mb-2 text-gray-700 hover:text-indigo-600" to="#">
              Instagram
            </Link>
            <Link className="block mb-2 text-gray-700 hover:text-indigo-600" to="#">
              Twitter
            </Link>
            <Link className="block text-gray-700 hover:text-indigo-600" to="#">
              LinkedIn
            </Link>
          </div>

          {/* Brand Details */}
          <div >
            <h1 className="font-bold text-lg mb-4">Brand Details</h1>
            <p className="text-gray-600  mb-4">
              "Where innovation meets excellence. Empowering your journey with products that inspire
              and services that exceed expectations."
            </p>
            <img
              className="rounded-md mx-auto h-20 shadow-lg"
              src="https://cdn.dribbble.com/userupload/4694068/file/original-e33e877112ba104606572f467d47712b.jpg?resize=752x&vertical=center"
              alt="Brand Inspiration"
            />
          </div>

          {/* Contact Us */}
          <div >
            <h1 className="font-bold text-lg mb-4">Contact Us</h1>
            <form className="flex flex-col gap-4">
              <input
                className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
                type="text"
                placeholder="Enter Full Name"
              />
              <input
                className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
                type="text"
                placeholder="Enter Mobile"
              />
              <input
                className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                type="email"
                placeholder="Enter Email ID"
                required
              />
              <textarea
                className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter query here"
              ></textarea>
              <button className="p-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-800">
                Submit
              </button>
            </form>
          </div>
        </footer>


      </div>
    </>
  );
}
