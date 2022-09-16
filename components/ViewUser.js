import React,{useState,useEffect,useContext} from 'react'
import {useHistory,useLocation} from "react-router-dom"
import { GlobalContext } from "../context/GlobalState";
import {Table,tr,td,thead,tbody,th} from 'reactstrap';
import logo from "../logo.png";
import logo2 from "../logistics.jpeg";
import axios from 'axios';
import barcode from "../barcode.jpeg"
import cert from "../certified.png"
import sign from "../sign.jpg"
import Button from 'reactstrap/lib/Button';
import sp from "../sp.jpeg"
import sd from "../sd.gif"

 export  const View=(props)=> {
    const { editUser, users } = useContext(GlobalContext);
   const [selectedPackage, setselectedPackage] = useState({})
   const history = useHistory();
   const currentPackageId = props.match.params.id;
   const location = useLocation()
   const [data2,setdata2]=useState()
   
useEffect(()=>{


    setdata2(location.state)

},[data2])
  const show=()=>{
    
    console.log(data2)
  }
  return (
  <div style={{maxWidth:'85vw',backgroundColor:'white',padding:'15px',margin:'auto'}}>
      <div style={{position:'absolute',top:"40%",left:"35%",opacity:'0.5',zIndex:'100'}}><img width="250" src={cert}/></div>
  <div  onClick={show}><h6 style={{textAlign:"center",margin:'10px auto'}}>SWIFT WAY CARGO| INVOICE</h6></div>
  <div style={{display:'flex' ,justifyContent:'space-evenly',gap:'20px'}}> 
      <div >
          <img width="300" src={logo}/> <br/>
   TRACKING ID : {!!data2?data2.mydata.trackingNumber:"loading.."}
   
   </div>
        <div>
        <img width="250" src={logo2}/> 
        </div>
        </div>

        <div style={{display:'flex',justifyContent:'space-evenly',margin:"20px"}}>
        <div >
            <p><strong>FROM(SENDER)</strong></p>
<h1>{!!data2?data2.mydata.from:"loading.."}</h1>
  <p>Address : {!!data2?data2.mydata.origin:"loading.."}</p>      
        </div>
        {
            ////
        }
        <div>
        <p><strong>TO(CONSIGNEE)</strong></p>
<h1>{!!data2?data2.mydata.to:"loading.."}</h1>
  <p>Destination Address : {!!data2?data2.mydata.Destination:"loading.."}</p>      
  <p>Phone : {!!data2?data2.mydata.phone:"loading.."}</p>
  <p>Email : {!!data2?data2.mydata.email:"loading.."}</p>



        </div>
         <div><img width="150"src={barcode}/>
         <p>Payment Due :{!!data2?data2.mydata.date:"loading.."}</p>
         <p>Booking Mode: <font color="red">Custom Fee Paid</font></p>
         <p>Insurance : $1.00</p></div>
         
    </div>
    <Table
  borderless
  responsive
  striped
>
  <thead>
    <tr>
      <th>
        Qty
      </th>
      <th>
        Status
      </th>
      <th>
        Description
      </th>
      <th>
       Shipping Cost $
      </th>
      <th>
       Clearance Cost $
      </th>
      <th>
      Total Cost $
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
      {!!data2?data2.mydata.Quantity:"loading.."}
      </th>
      <td>
      {!!data2?data2.mydata.status:"loading.."}
      </td>
      <td>
      {!!data2?data2.mydata.description:"loading.."}
      </td>
      <td>
      {!!data2?data2.mydata.Shippingcost:"loading.."}
      </td>
      <td>
      {!!data2?data2.mydata.clearancecost:"loading.."}
      </td>
      <td>
      {!!data2?data2.mydata.totalcost:"loading.."}
      </td>
    </tr>
    
  </tbody>
</Table>
<br/>
<div>
<img style={{width:"40vw",opacity:'0.8'}} src={sp}/>  
<img style={{width:"20vw",opacity:'0.4'}} src={sd}/> 
<br/> 
<p><strong>Signature:</strong> <img width="100" style={{opacity:"0.3"}}src={sign}/></p>
</div>
<br/>
        <Button onClick={()=>{window.print()}}>Print Receipt</Button>
   </div>
  )
}

