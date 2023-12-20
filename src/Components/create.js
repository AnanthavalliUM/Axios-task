
import {API_URL} from "../constants/url";
import {Form, Button, Checkbox} from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";


const Create = () => {

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const[email, setemail] = useState('');
    const [phonenum, setphonenum] = useState('');
    const [checked, setchecked] = useState(false);
    const navigate = useNavigate();

    const handleclick = async () => {
        await axios.post(API_URL, {
            firstname,
            lastname,
            email,
            phonenum,
            checked
        })
       navigate('/read')
    }
    return(
        <div>
            <div className="header-container">
      <div className="left">
        
        <div className="nav-container">
          <div className="nav-item">
            <Link className="link" to="/update">
              UpdateUser
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/read">
              DeleteUser
            </Link>
          </div>
          </div>
          </div>
          </div>
            <Form className="form">            
                <Form.Field>
                    <label>First Name:  </label>
                    <input value={firstname} placeholder="Enter first name" onChange={e => setfirstname(e.target.value)} />

                </Form.Field> <br />
                <Form.Field>
                    <label>Last Name: </label>
                    <input value={lastname} placeholder="Enter last name"  onChange={e => setlastname(e.target.value)}/>

                </Form.Field><br />
                <Form.Field>
                    <label>Email-id: </label>
                    <input value={email} placeholder="Enter Email"  onChange={e => setemail(e.target.value)}/>

                </Form.Field><br />
                <Form.Field>
                    <label>MobileNo: </label>
                    <input value={phonenum} placeholder="Enter MobileNumber"  onChange={e => setphonenum(e.target.value)}/>

                </Form.Field><br />
                <Form.Field>
                   <Checkbox checked={checked}  onChange={() => setchecked(!checked)}label="Agree terms and conditions" />

                </Form.Field><br />
                <Button type="submit" onClick={handleclick}>Submit</Button>
         </Form>
        </div>
        
    )
}


export default Create;