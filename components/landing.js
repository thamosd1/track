import React, { useState, useRef } from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,Navbar,NavbarBrand,NavbarToggler,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu
    ,DropdownItem,NavbarText,Collapse,Nav,
    CardBody,CardImg,CardText,CardTitle,CardGroup,Card,CardSubtitle,
  Progress} from "reactstrap";
import logo from "../logo.png"
import logo2 from "../plane.jpg"
import img from "../bar.png"
import img2 from "../efulfill.jpeg"
import img3 from "../ecom.jpeg"
import img4 from "../dshipping.jpeg"
import img5 from "../ishipping.jpeg"
import axios from 'axios';
import { Page, Text, View, Document, StyleSheet,Image } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';
export default function Landing() {
  const [isLoading, setLoading] = useState(false);
  const [show, setshow] = useState(false);
  const [data, setData] = useState({})
  const [trno, setrno] = useState("")
  const myRef = useRef(null)
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column"
    },
    image: {
      width: "50%",
      padding: 10
    },
    centerImage: {
      alignItems: "center",
      flexGrow: 1
    },
    text: {
      width: "100%",
      backgroundColor: "#f0f0f0",
      paddingHorizontal: 50,
      paddingVertical: 30,
      color: "#212121"
    }
  });
  
  const executeScroll = () => myRef.current.scrollIntoView() 
  const fetchData = async () =>{
    setLoading(true);
    try {
      const {data: response} = await axios.get(`https://swifttracker.herokuapp.com/packages?trackingNumber=${trno}`);
      setData(response);
      

      console.log(response)
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  }
  return (
    <div>
    
  <Navbar
    color="light"
    light
    expand="md"
    fixed="top"
  >
    <NavbarBrand href="/">
     <img src={logo} height={50}/>
    </NavbarBrand>
   
  </Navbar>
  



<div style={{display:'relative',width:'100vw'}}>
    <img src={logo2} />
    
  <div className="bg"style={{maxWidth:"80%"}}>
<strong>ENTER TRACKING ID</strong>

<div>
  <Input type="text"  value={trno} onChange={(e)=>{setrno(e.target.value)}}
  />
</div>
<div>
  <Button
    color="primary"
    onClick={(e)=>{
      if(trno==""||trno==null){
        alert("error !!empty input")
        return
      }
      setshow(true)
      fetchData()
      executeScroll()
    }}
  >
    TRACK PARCEL
  </Button>
</div>
<br/>
<p  style={{textAlign:'center'}}><font color="white">We provide a means to track a wide range of parcels with support from multiple carriers and partners using a well structured application programming interface. we are tested and aim for top effeciency</font></p>
  </div>
</div>
<div ref={myRef} style={{maxWidth:'100vw',display:"flex",justifyContent:'center'}}>
  <img style={{maxWidth:"80vw",margin:"10px auto"}}src={img}/>
</div>


{show &&<div >
{
  isLoading?<div>
<div style={{display:'flex',justifyContent:"center"}}><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
  </div>:
  
  <div>

{data.length>0 ?<div  style={{maxWidth:'300px',margin:"auto"}}> 
<p>Tracking Results</p>
  <p>Tracking ID : {data[0].trackingNumber}</p>
  <p>Consignee Email :<strong>{data[0].email}</strong></p>
  <p>Origin : {data[0].origin}</p>
  <p>Destination : {data[0].Destination}</p>
  <p>Status :<strong>{data[0].status}</strong></p>
  <p>Last Registered Location :<strong>{data[0].currentlocation}</strong></p>

  <p>Progress :{data[0].progress}%</p>
  <Progress
  animated
  value={data[0].progress}
/> 
<br/>
<div style={{display:'flex',justifyContent:'space-evenly'}}> <Button color="primary"> <Link style={{color:"white"}}

   to={{
    pathname: `/view/${data[0].id}`,
    state: {
      mydata: data[0],
    },
  }}>
View Receipt
</Link>  </Button> <Button color="warning" onClick={()=>{setshow(false)}}> cancel  </Button> </div> 
     </div>:
     
   <div>
     <div style={{maxWidth:'300px',margin:"auto"}}> 
<p>Tracking Results</p>
  <p>Tracking ID : Does not exist on our system</p>
   </div> <div style={{display:'flex',justifyContent:'space-evenly'}}>  <Button color="warning" onClick={()=>{setshow(false)}}> cancel  </Button> </div>   </div>  
     
     }


  </div>
}




  
</div>




}
<div> <h1 style={{textAlign:"center"}}>SERVICES</h1></div>
<br/>
<CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={img2}
      top
      width="100%"
      className="cimg"
    />
    <CardBody>
      <CardTitle tag="h5">
       E-FULFILLMENT
      </CardTitle>
      
      <CardText>
      Swift Way Cargo offers a wide variety of e-Fulfilment solutions to enhance your domestic and international deliveries.  </CardText>
     
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={img3}
      top
      width="100%"
      className="cimg"
    />
    <CardBody>
      <CardTitle tag="h5">
        E-COMMERCE
      </CardTitle>
      
      <CardText>
      Swift Way Cargo has a large dedicated division offering host of e-Commerce services to International locations.
      </CardText>
      
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={img4}
      top
      width="100%"
      className="cimg"
    />
    <CardBody>
      <CardTitle tag="h5">
        DOMESTIC 
      </CardTitle>
     
      <CardText>
      The domestic packages of services are designed for door-to-door secure and cost effective services.

</CardText>
      
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={img5}
      top
      width="100%"
      className="cimg"
    />
    <CardBody>
      <CardTitle tag="h5">
       INTERNATIONAL
      </CardTitle>
     
      <CardText>
      Under this we handle all B2C and B2B Cross Border transaction involving movement of e-Commerce Parcels. </CardText>
      
    </CardBody>
  </Card>
</CardGroup>

<footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">Swift Way Cargo Delivery Company. is a subsidiary of Swift Way Cargo Delivery Company Express Limited – United States' largest parcel delivery network. Swift Way Cargo Delivery Company Express Ltd. was founded in 1990 and has more than 25 years of operating experience, with presence in over 10,000 locations. We are a strategic partner of DPD Group, an International Parcel Delivery Services Company owned by GeoPost. Building enduring and close ties with the customers is our priority and we pride ourselves in offering a broad range of services to our esteemed patrons. We have an efficient team of employees and associates whose hard work and dedication have not only helped us emerge as an internationally recognized courier service provider but also have been instrumental in creating a strong value system that is palpable in our work culture and services.

</p>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="">International Delivery</a></li>
                <li><a href="">Courier from USA to India</a></li>
                <li><a href="">Third Party Logistics</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                <li><a href="http://scanfcode.com/category/android/">Truck Services</a></li>
                
              </ul>
            </div>
            <div className="col-xs-6 col-md-3">
              <h6>Contact Info</h6>
              <ul className="footer-links">
                <li><a href="">+1(850)485-5432</a></li>
                <li><a href="">support@swiftway_cargo.com</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">© Copyright Swift Way Cargo Delivery CompanyLimited. All Rights Reserved 
                
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
                <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
                <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>   
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
