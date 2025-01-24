import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Navigation,Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

export default function Home(){

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
  return(<>


  <Layout>

  <div>
    <header>
    <Swiper className="mySwiper"
     navigation={true}
     pagination={true}
      slidesPerView={1}
     modules={[Navigation,Pagination]}
    >
      <SwiperSlide ><img  src="/Images/1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/Images/2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/Images/3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/Images/4.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/Images/5.jpg" alt="" /></SwiperSlide>
    </Swiper>
    </header>
 <div className="m-2 w-[50%] font-semibold  text-center mx-auto">
 Latest Products
<h1 className="font-normal text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatem porro qui ipsum quas dolore error, officia magnam eligendi ipsam vero molestias quam quos expedita architecto accusamus iste facere. Pariatur.</h1>

 </div>


 <div className="grid grid-cols-4 gap-5 ">
 {products.map((itm,inx)=>(
   <div key={inx} className="shadow-lg p-4" > 
  <img src={itm.image} alt="" />
  
   <h1 className="font-semibold flex "> ₹{itm.price-(itm.discount * itm.price)/100}
    
   <h1 className="text-red-500 ml-5 line-through">{itm.price} 
    
    </h1><h1 className="text-xs font-medium opacity-65">({itm.discount}%off)</h1> 
    </h1> 
    {itm.title}
 <br />
    <button className="bg-green-600 rounded-md p-2 flex m-1 mt-4 px-10 hover:bg-blue-600 justify-self-center text-sm text-white">Buy Now</button>
  </div>))} </div>

 

  
  </div>
  </Layout>
</>)
}