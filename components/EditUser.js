import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import axios from 'axios';

export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedPackage, setselectedPackage] = useState({
    
  })
  const [trackingNo, setTRN] = useState();
  const [sender, setsender] = useState("");
  const [receiver, setreceiver] = useState("");
  const [dsc, setdsc] = useState("");
  const [iv, setiv] = useState("");
  const [sc, setsc] = useState();
  const [cc, setcc] = useState();
  const [sts, setsts] = useState("");
  const [tc, settc] = useState();
  const [qty, setqty] = useState();
  const [org, setorg] = useState("");
  const [dst, setdst] = useState("");
  const [prg, setprg] = useState();
  const [cl, setcl] = useState();
  const [phone, setphone] = useState();
  const [email, setemail] = useState();
  const [loading, setLoading] = useState();
  const [count, setcount] = useState();
  const history = useHistory();
  const currentPackageId = props.match.params.id;

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`https://swifttracker.herokuapp.com/packages/${currentPackageId}`);
       
        setTRN(response.trackingNumber)
        setsender(response.from)
        setreceiver(response.to)
        setdsc(response.description)
        setiv(response.value)
        setsc(response.Shippingcost)
        setcc(response.clearancecost)
        setsts(response.status)
        settc(response.totalcost)
        setqty(response.Quantity)
        setorg(response.origin)
        setdst(response.Destination)
        setprg(response.progress)
        setcl(response.currentlocation)
        setphone(response.phone)
        setemail(response.email)

      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
    
       
    
   
  },[selectedPackage])

  

  const onSubmit = (e) => {
    e.preventDefault();
 const   packageToPatch={
trackingNumber:trackingNo,
from:sender,
to:receiver,
email:email,
phone:phone,
currentlocation:cl,
value:iv,
Shippingcost:sc,
clearancecost:cc,
status:sts,
totalcost:tc,
Quantity:qty,
origin:org,
Destination:dst
,
progress:prg
}
    axios.patch(`https://swifttracker.herokuapp.com/packages/${currentPackageId}`, packageToPatch).then(()=>{
      window.alert('updated succesffulyy');
      history.push("/admindash104")
      
          }).catch((error) => alert( error))
}

  return (
    <Form onSubmit={onSubmit} style={{ maxWidth: "30rem",margin:"auto"}}>
      <FormGroup>
        <Label>Tracking No:</Label>
        <Input type="text" value={trackingNo} onChange={(e)=>{
          setTRN(e.target.value)
        }} name="trackingNo" placeholder="Enter a unique 10 digit number" required></Input>
         <Label>Sender:</Label>
        <Input type="text" value={sender} onChange={(e)=>{
          setsender(e.target.value)
        }} name="sender" placeholder="Enter sender name" required></Input>
        <Label>Reciever:</Label>
        <Input type="text" value={receiver} onChange={(e)=>{
          setreceiver(e.target.value)
        }} name="receiver" placeholder="Enter receiver name" required></Input>
         <Label>description:</Label>
        <Input type="text" value={dsc} onChange={(e)=>{
          setdsc(e.target.value)
        }} name="dsc" placeholder="Enter description" required></Input>
        <Label>item value:</Label>
        <Input type="text" value={iv} onChange={(e)=>{
          setiv(e.target.value)
        }} name="sender" placeholder="Enter item value" required></Input>
        <Label>Shipping cost:</Label>
        <Input type="number" value={sc} onChange={(e)=>{
          setsc(e.target.value)
        }} name="sc" placeholder="Enter shipping cost" required></Input>
        <Label>Status:</Label>
        <Input type="text" value={sts} onChange={(e)=>{
          setsts(e.target.value)
        }} name="status" placeholder="setstatus" required></Input>
        <Label>clearance cost:</Label>
        <Input type="number" value={cc} onChange={(e)=>{
          setcc(e.target.value)
        }} name="cc" placeholder="Enter clearance cost" required></Input>
        <Label>Total Cost:</Label>
        <Input type="number" value={tc} onChange={(e)=>{
          settc(e.target.value)
        }} name="tc" placeholder="Enter sender name" required></Input>
        <Label>QTY:</Label>
        <Input type="text" value={qty} onChange={(e)=>{
          setqty(e.target.value)
        }} name="qty" placeholder="Enter Quantity" required></Input>
        <Label>origin address:</Label>
        <Input type="text" value={org} onChange={(e)=>{
          setorg(e.target.value)
        }} name="org" placeholder="Enter origin address" required></Input>
         <Label>destination address:</Label>
        <Input type="text" value={dst} onChange={(e)=>{
          setdst(e.target.value)
        }} name="dst" placeholder="Enter destination address" required></Input>
         <Label>progress:</Label>
        <Input type="number" value={prg} onChange={(e)=>{
          setprg(e.target.value)
        }} name="prg" placeholder="Enter percentage progress" required></Input>
        <Label>Current Location:</Label>
        <Input type="text" value={cl} onChange={(e)=>{
          setcl(e.target.value)
        }} name="cl" placeholder="Enter Current location" required></Input>
<Label>Phone:</Label>
        <Input type="text" value={phone} onChange={(e)=>{
          setphone(e.target.value)
        }} name="phone" placeholder="Enter phone number" required></Input>
        <Label>Email:</Label>
        <Input type="text" value={email} onChange={(e)=>{
          setemail(e.target.value)
        }} name="email" placeholder="Enter email" required></Input>
      </FormGroup>
      <Button type="submit">Edit package</Button>
      <Link to="/admindash104" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
