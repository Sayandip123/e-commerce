import { BrowserRouter, Route, Routes } from "react-router-dom"
import Admin from "./components/Admin/Layout"
import Notfound from "./components/Notfound"
import Products from "./components/Admin/Products"
import Order from "./components/Admin/order"
import Payments from "./components/Admin/Payments"





Payments
export default function App(){
  return(<> <BrowserRouter>
  <Routes>
    <Route path="/admin" > 
    
    <Route path="products" element={<Products/>}> </Route>
   
    <Route path="order" element={<Order/>}></Route>

    <Route path="payment" element = {<Payments/>} />
   
    </Route>
   
   <Route path="*" element={<Notfound/>} />
  </Routes>
  </BrowserRouter></>)
}