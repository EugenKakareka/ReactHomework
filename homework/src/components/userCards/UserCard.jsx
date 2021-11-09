import React from 'react';
import {useDispatch} from "react-redux";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import { deleteUser } from '../../actions/actions';
import { parseTime } from '../../scripts/parseTime';

const UserCard = ({user}) => {
    const dispatch = useDispatch();
    return (
        <Card>
            <CardContent>
                <Typography component='p'>ID:{user.id}</Typography>
                <Typography component='p'>First Name:{user.firstName}</Typography>
                <Typography component='p'>Last Name:{user.lastName}</Typography>
                <Typography component='p'>TIme:{parseTime(user.time)}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={()=>dispatch(deleteUser(user.id))}>Delete</Button>
            </CardActions>
        </Card> 
);
}

export default UserCard;
