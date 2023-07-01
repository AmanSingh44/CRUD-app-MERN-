import { useEffect,useState } from 'react';
import {Table, TableHead,TableCell,TableRow,TableBody,styled,Button} from '@mui/material'
import { getUsers,deleteUser } from '../apiCollection/api';
import { Link } from "react-router-dom";


const Container=styled(Table)`
    width:75%;
    margin:50px auto 0 auto;
`
const TRow=styled(TableRow)`
    background:#0b032b;
    & > th{
        color:#fff;
        font-size:20px;
    }
`

const AllUsers=()=>{

    const[users,setUsers]=useState([]);

    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers=async()=>{
        let response=await getUsers();
        setUsers(response.data);
    }

    const deleteUserDetails=async(id)=>{
        await deleteUser(id);
        getAllUsers();
    }

    return(
        <Container>
            <TableHead>
                <TRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user=>(
                        <TableRow key={user._id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button variant="contained" onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Container>
    )
}

export default AllUsers;