import { useState } from "react"
import Layout from "./Layout"
import { td } from "framer-motion/client"

export default function Order(){
  const[orders,setOrders] = useState([   
    {
      OrderId : '1',Customersname:'John  Doe', Email: 'johndoe@mail.com',
  Mobile : '1234567890',
    Productdetail: 'Iphone 16'
    ,Amount: '100000',
    OrderPlaced: '20/1/2025',Status:'Dispatched'},
    {
      OrderId : '1',Customersname:'John  Doe', Email: 'johndoe@mail.com',
  Mobile : '1234567890',
    Productdetail: 'Iphone 16'
    ,Amount: '100000',
    OrderPlaced: '20/1/2025',Status:'Dispatched'},
    {
      OrderId : '1',Customersname:'John  Doe', Email: 'johndoe@mail.com',
  Mobile : '1234567890',
    Productdetail: 'Iphone 16'
    ,Amount: '100000',
    OrderPlaced: '20/1/2025',Status:'Dispatched'},
    {
      OrderId : '1',Customersname:'John  Doe', Email: 'johndoe@mail.com',
  Mobile : '1234567890',
    Productdetail: 'Iphone 16'
    ,Amount: '100000',
    OrderPlaced: '20/1/2025',Status:'Dispatched'}])
return(<>
<Layout>

<div>
  <h1 className=" text-xl font-semibold ">Orders</h1>
    <table className="w-full">
      <thead>
        <tr className="bg-slate-200">
          <th className="p-4">Order Id</th>
          <th>Customer's name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Product detail</th>
          <th>Amount</th>
          <th>Order Placed On</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="p-3 text-center ">
   {orders.map((item,index) => (
    <tr key={index} className={`text-center ${index%2 == 0 ? 'bg-slate-300' : 'bg-white'}`}>
        <td>
    {item.OrderId}
   </td>
       <td className="capitalize">
    {item.Customersname}
   </td>
   <td>
    {item.Email}
   </td> <td>
    {item.Mobile}
   </td>
   <td className="capitalize">{item.Productdetail}</td>
   <td> ₹{item.Amount}</td>
   <td>
    {item.OrderPlaced}
   </td>
  
  
   <td className="capitalize ">
<select className="bg-[#dadada7b]" >
  <option value="pending">Pending</option>
  <option value="dispatched">dispatched</option>
  <option value="shipping">shipping</option>
  <option value="shipped">shipped</option>
  <option value="delivered">delivered</option>
</select>

   </td>
    </tr>
   ))}
        
      </tbody>
    </table>

</div>
</Layout>
</>)
}
