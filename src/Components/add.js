import { useEffect, useState,  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {API_URL} from "../constants/url";
import {Table, Button, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell} from "semantic-ui-react";

const Read = () => {
    const [apidata, setdata] = useState([]);
    const navigate = useNavigate();

    
    const getapi = async () => {
    const resp = await axios.get(API_URL);
    setdata(resp.data);
    }

    const deleteuser = async (id) =>{
        await axios.delete(`${API_URL}/${id}`)
        getapi()
    }
    const updateuser = ({firstname, lastname, id, email, phonenum, checked}) => {

        localStorage.setItem("id", id)
        localStorage.setItem("firstname", firstname)
        localStorage.setItem("lastname", lastname)
        localStorage.setItem("email", email)
        localStorage.setItem("phonenum", phonenum)
        localStorage.setItem("checked", checked)
        navigate('/update')

    }

    useEffect(() => {
      getapi();

    }, [])


    return(
        <Table singleLine>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>FirstName</TableHeaderCell>
                    <TableHeaderCell>LastName</TableHeaderCell>
                    <TableHeaderCell>Email-id</TableHeaderCell>
                    <TableHeaderCell>MobileNo</TableHeaderCell>
                    <TableHeaderCell>Checked</TableHeaderCell>
                    <TableHeaderCell>Delete</TableHeaderCell>
                    <TableHeaderCell>Update</TableHeaderCell>




                </TableRow>
            </TableHeader>
            <TableBody>
                {apidata.map(data=>(
                    <TableRow key={data.id}>
                    <TableCell>{data.firstname}</TableCell>
                    <TableCell>{data.lastname}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.phonenum}</TableCell>
                    <TableCell>{data.checked ? "checked" : "notchecked"}</TableCell>
                    <TableCell><Button onClick={() => deleteuser(data.id)}>Delete</Button></TableCell>
                    <TableCell><Button onClick={() => updateuser(data)}>Update</Button></TableCell>

                </TableRow>
                ) )} 
                
            </TableBody>
        </Table>
    )
}


export default Read;