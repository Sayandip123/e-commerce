import { useState } from "react"
import Layout from "./Layout"
 


export default function Products(){
  const [products,setProducts] = useState([{
    title: 'Men`s Shirt blue demin',
    description : 'Men`s product',
    price : 2000,
    discount :15,
    image : '/Products/a.jpg'
  },
  {
    title: 'Men`s Shirt blue demin',
    description : 'Men`s product',
    price : 2000,
    discount :15,
    image : '/Products/b.jpg'
  },
  {
    title: 'Men`s Shirt blue demin',
    description : 'Men`s product',
    price : 2000,
    discount :15,
    image : '/Products/c.jpg'
  },
  {
    title: 'Men`s Shirt blue demin',
    description : 'Men`s product',
    price : 2000,
    discount :15,
    image : '/Products/d.jpg'
  },
  {
    title: 'Men`s Shirt blue demin',
    description : 'Men`s product',
    price : 2000,
    discount :15,
    image : '/Products/e.jpg'
  },
  {
    title: 'Men`s Shirt blue demin',
    description : 'Men`s product',
    price : 2000,
    discount :15,
    image : '/Products/f.jpg'
  },
  {
    title: 'Men`s Shirt blue demin',
    description : 'Men`s product',
    price : 4000,
    discount :50,
    image : '/Products/g.jpg'
  },
  {
    title: 'Men`s Shirt blue demin',
    description : 'Men`s product',
    price : 2000,
    discount :15,
    image : '/Products/h.jpg'
  },
  {
    title: 'Men`s Shirt blue demin',
    description : 'Men`s product',
    price : 2000,
    discount :25,
    image : '/Products/i.jpg'
  },
  {
    title: 'Men`s Shirt blue demin',
    description : 'Men`s product',
    price : 3000,
    discount :15,
    image : '/Products/j.jpg'
  },
  {
    title: 'Men`s Shirt blue demin',
    description : 'Men`s product',
    price : 2000,
    discount :15,
    image : '/Products/k.jpg'
  }])
  return(<><div>
    <Layout>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 rounded-md" >
      
      {products.map((item,index) => (
        <div key={index} className="w-fit shadow-lg rounded-md ">

          <img className="rounded-md" src={item.image} alt="" />
          <div className="flex gap-3 justify-center ">
            <h1 className="font-semibold">₹{    item.price -  (item.price * item.discount /100)}</h1>
         
         <div className="flex " >
         <h1 className="text-center line-through text-red-500"> ₹{item.price } </h1>
         <h1 className="text-xs opacity-60">({item.discount}% off)</h1> </div>
         
         
          </div>
         
          <h1 className="text-center pb-4">{item.title}</h1>
      </div>))}
    </div>

    </Layout>
    </div></>)
}