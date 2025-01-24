import Layout from "./Layout"


export default function ContactUs(){
  return(<>
  <Layout>
    <div className="flex justify-center gap-20 items-center"> 
    <img  src="https://media.istockphoto.com/id/1091858450/photo/contact-us-sign-on-a-wooden-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=9dNUpxHvYfW-fxd9HlRlqFnk77b_iUfZpdSdqpEixjo=" alt="" />
    <form className="flex flex-col items-center border-2 border-black p-4 m-2 rounded-md" >
      <label > Full name <input className="border-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 m-2" required type="text" placeholder="Enter Full name" /></label> 
      <label > Email <input required type="email" 
      className="border-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 m-2" placeholder="Enter Email" /></label> 
      <label > Enter your Query <br /> <textarea  required className="focus:outline-none focus:ring-2 focus:ring-indigo-600 border-4 rounded-md p-8" name="" id=""></textarea> </label>
     <button className="p-2 bg-blue-600 rounded-md m-2">Submit</button>
    </form>
    </div>
    
   
     </Layout>
</>)
}