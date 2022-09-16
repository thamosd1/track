import React, { useContext ,useEffect,useState} from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link ,useHistory} from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
import axios from 'axios';
export const UserList = () => {
 
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
const history=useHistory()
  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://swifttracker.herokuapp.com/packages');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
    console.log(data)
  }, []);
  return (
    <ListGroup className="mt-4" style={{ maxWidth: "80vw",margin:"auto"}}> 
      {data.length > 0 ? (
        <>
          {data.map(pack => (<div>
            <ListGroupItem className="d-flex" key={pack.id}><div>
             <h4>Tracking number:  <span>{pack.trackingNumber}</span></h4>
             <h4>Description:  <span>{pack.description}</span></h4></div>
              <div className="ml-auto">
                  <Link to={`/edit/${pack.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <Button  color="danger" onClick={()=>{
axios.delete(`https://swifttracker.herokuapp.com/packages/${pack.id}`)
.then(() => {
alert("deleted succesfully reload page")
history.push("/admindash104");




});


                }}>Delete</Button>
              </div>
            </ListGroupItem>
           
            </div>
          ))}
        </>
      ) : (
          <h4 className="text-center">No data</h4>
        )}
    </ListGroup>
  )
}
