import Layout from "./Layout"


export default function Payments(){
  return(<><div>
    <Layout>
    <div className>
      <table className="m-2">
      
        <tr className="p-2">
            <th>Payment id</th>
            <th>Customer's name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        
     
        
      </table>
    </div>

    </Layout>
    </div></>)
}