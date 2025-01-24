
import { useState } from "react"
import Layout from "./Layout"
export default function Category(){
  const [category,setCategory]  =  useState([{
    title : 'Electronics'
  },{
    title : 'Gym'
  },
  {
    title : 'Beauty'
  },
  {
    title : 'Fashion'
  },
  {
    title : 'Furnitue'
  },
  {
    title : 'Men`s'
  },{
    title : 'Womens'
  }
  ,{
    title : 'Toys'
  },{
    title : 'Kids'
  }])

  return(<>
  <Layout>
    Category

    <div className="grid m-3 p-2 grid-cols-4 shadow-lg gap-4">
    {category.map((item,index)=>(
      <div className="bg-[#dadada7b] text-indigo-600 hover:border-indigo-600 cursor-pointer hover:text-white hover:bg-indigo-600 border-2 border-indigo-600 p-2 rounded-md text-sm font-medium text-center " key={item.index} >
        {item.title}
      </div>
    ))} </div>
  
  </Layout>
  </>)
}