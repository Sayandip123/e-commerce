import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaTruckRampBox } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { VscDashboard } from "react-icons/vsc";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";

export default function Layout({children}) {
  const location = useLocation();
  const [size, setSize] = useState(240);
  const [show, setShow] = useState(false);
  console.log(location)
 const [menu,setMenu] = useState([
  {
    label : 'Dashboard',
    icon : <VscDashboard />,
    link : '/admin/dashboard'
   },{
  label: 'Products',
  link: '/admin/products',
  icon : <FaShoppingCart/>
 },
 {
  label: 'Orders',
  icon : <FaTruckRampBox/>,
  link : '/admin/order'
 }
,
 {
  label : 'Payments',
  icon : <TbReportMoney/>,
  link : '/admin/payment'
 }, {
  label : 'Settings',
  icon : <IoIosSettings />,
  link : '/admin/settings'
 },
 {
  label : 'Logout',
  icon : <AiOutlineLogout/>,
  link : '/'
 }])
  return (
    <>
      <div className="flex min-h-screen ">
        <div
          className="bg-white overflow-hidden "
          style={{ width: size, transition: "0.1s" }}
        >
          <div className="p-9 bg-black text-white text-center ">Your Menu </div> 
          {menu.map((itm,indx)=>(
             <div key={indx} className={`m-3 justify-items-center border-2 p-2 border-black rounded-md text-center hover:bg-slate-300
             ${itm.link === location.pathname ? 'bg-slate-300' : 'bg-slate-50'}
             `}>
                {itm.icon}
    <Link to={itm.link}>{itm.label}</Link>
             </div>
      
            
          ))}
        
        
        </div>
        <div className="w-full  flex  gap-2  ">
          <div className="w-full">
            <nav className="w-full bg-white flex justify-between p-6  items-center shadow-lg">
              <button
                onClick={() => (size === 240 ? setSize(0) : setSize(240))}
                className="bg-white  p-2 h-8 hover:bg-slate-400 rounded-md  "
              >
                <IoMenuSharp />
              </button>

              <h1 className="p-2 rounded-md border-2">E-store</h1>
              <button onClick={()=>setShow(!show)} className="relative ">
                <img
                  className="h-12 w-12 rounded-full cursor-pointer"
                  src="https://static.vecteezy.com/system/resources/previews/043/900/708/non_2x/user-profile-icon-illustration-vector.jpg"
                  alt=""
                />
                {show &&
                <section className="absolute shadow-xl bg-slate-50 h-35 w-[140px] top-10 right-5 border-2 rounded-md ">
                <div className="text-center m-4 mt-5 rounded-md ">
                  {" "}
                  <h1>Shogun</h1>
                  <h1 className="opacity-45 text-center text-sm">
                    shogun@mail.com
                  </h1>
                  <section className="flex m-4 gap-2 text-center items-center justify-center hover:bg-slate-400 rounded-md ">
                    {" "}
                    <MdOutlineLogout /> <h1>Logout</h1>{" "}
                  </section>
                </div>
              </section>
                }
                
              </button>
            </nav>
            <div className="p-4">{children}</div>
          </div>
        </div>
      
      </div>
    </>
  );
}
