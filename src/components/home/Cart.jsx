import { useState } from "react";
import Layout from "./Layout";
import { IoTrashBin } from "react-icons/io5";
import { BsFillBagCheckFill } from "react-icons/bs";
export default function Cart() {
  const [cart, setCart] = useState([
    {
      title: "Iphone X",
      price: 40000,
      discount: 10,
      img: "/Products/d.jpg",
    },{
      title: "Iphone X",
      price: 40000,
      discount: 10,
      img: "/Products/d.jpg",
    },{
      title: "Iphone X",
      price: 40000,
      discount: 10,
      img: "/Products/d.jpg",
    },{
      title: "Iphone X",
      price: 40000,
      discount: 10,
      img: "/Products/d.jpg",
    },{
      title: "Iphone X",
      price: 40000,
      discount: 10,
      img: "/Products/d.jpg",
    },{
      title: "Iphone X",
      price: 40000,
      discount: 10,
      img: "/Products/d.jpg",
    },{
      title: "Iphone X",
      price: 40000,
      discount: 10,
      img: "/Products/d.jpg",
    },
  ]);
  return (
    <>
      <Layout>
        <div className="mx-auto rounded-md p-8 shadow-xl w-[60%]">
          <h1 className="text-center text-xl font-semibold">
            Your Cart
          </h1>
          <ul className="mt-5">
            {cart.map((item, index) => (
              <li className="flex justify-center border-2 p-4 items-center mt-5 gap-10">
                <img className="w-20 rounded-sm h-15 object-cover" src={item.img} alt="" />
                <div className="capitalize font-semibold">
                  {" "}
                  Name : {item.title}
                  <br />{" "}
                  <div className="flex gap-1 ">
                    Price :{" "}
                    <h1> ₹{item.price - item.price * (item.discount / 100)}</h1>
                    <h1 className="line-through"> {item.price} </h1>
                    <h1 className="text-xs opacity-70 ">{item.discount}%off</h1>
                  </div>
                  <button className="bg-red-600 mt-2 px-10 p-1 flex items-center gap-2  text-white rounded-md"><IoTrashBin /> Remove</button>
                </div>
                
              </li>
              
            ))}
            <div className="flex items-center justify-around mt-10">
            <h1 className="text-center font-semibold text-xl">Total : ₹</h1>
            <button className="bg-orange-600  hover:bg-green-600 px-10 p-1 flex items-center gap-2  text-white rounded-md"><BsFillBagCheckFill /> Place Order</button>
              
               </div>
           
          </ul>
        </div>
      </Layout>
    </>
  );
}
