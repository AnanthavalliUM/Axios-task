import { useState, useEffect } from "react";
import {Form, Button, Checkbox} from "semantic-ui-react";
import {API_URL} from "../constants/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";





const Update = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const[email, setemail] = useState('');
    const [phonenum, setphonenum] = useState('');
    const [checked, setchecked] = useState(false);
    const [id , setid] = useState('');

    const navigate = useNavigate();

    const updateuser = async () => {
        await axios.put(`${API_URL}/${id}`, {
            firstname,
            lastname,
            email,
            phonenum,
            checked
        })
navigate('/read')
    }

    useEffect(() => {
        // console.log(localStorage.getItem(id));
        setfirstname(localStorage.getItem('firstname'));
        setlastname(localStorage.getItem('lastname'));
        setemail(localStorage.getItem('email'));
        setphonenum(localStorage.getItem('phonenum'));
        setchecked(localStorage.getItem('checked'));
        setid(localStorage.getItem('id'));
}, [])


    return(
        <div>
             <div>
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
                <Button type="submit"onClick={updateuser} >Update</Button>
         </Form>
        </div>
        </div>
    )
}


export default Update;