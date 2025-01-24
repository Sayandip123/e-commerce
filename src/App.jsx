import { BrowserRouter, Route, Routes } from "react-router-dom"

import Notfound from "./components/Notfound"
import Products from "./components/Admin/Products"
import Order from "./components/Admin/order"
import Payments from "./components/Admin/Payments"
import Dashboard from "./components/Admin/Dashboard"
import Settings from "./components/Admin/Settings"
import Authadmin from "./components/Admin/Authadmin"
import Home from "./components/home/Home"
import CustomerProduct from "./components/home/CustomerProduct"
import Category from "./components/home/Category"
import Login from "./components/home/Login"
import Signup from "./components/home/Signup"
import ContactUs from "./components/home/ContactUs"

import Middleman from "./components/Middle/middleman"
import Cart from "./components/home/Cart"
import Profile from "./components/home/Profile"

export default function App(){
  return(<> <BrowserRouter>
  <Routes>

    <Route path="/" element={<Home/>}></Route>
    <Route path="/products" element={<CustomerProduct/>}></Route>

   <Route path="/category" element={<Category/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/myprofile" element={<Profile/>}></Route>
   <Route element={<Middleman/>}> 
   <Route path="/login" element={<Login/>}></Route>
   <Route path="/signup" element={<Signup/>}></Route>

   </Route>
    
   
    <Route path="/contactus" element={<ContactUs/>}></Route>

    <Route path="/admin"  > 
    
      <Route path="products" element={<Products/>}> </Route>
   
      <Route path="order" element={<Order/>}></Route>
    
     <Route path="dashboard" element={<Dashboard/>}></Route>

      <Route path="payment" element = {<Payments/>} />
      
      <Route path="settings" element={<Settings/>}></Route>
   
      <Route path="authen" element={<Authadmin/>} ></Route>

    
    </Route>
  
   <Route path="*" element={<Notfound/>} />
  </Routes>
  </BrowserRouter></>)
}