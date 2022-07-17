import React from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux'

const Signup = () => {
    // temporary
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/v1/tokens', JSON.stringify({
            "user": {
                "email": email,
                "password": password,
            }
        }), {
            headers: {"content-type": "application/json"}
        }).then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.token)
            dispatch({type: 'LOGIN_USER', payload: {
                user: res.data.email
            }})
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input id="email" onChange={(e) => { setEmail(e.target.value )}} />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Signup