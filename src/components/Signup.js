import React from "react";
import axios from 'axios';

const Signup = () => {
    // temporary
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/v1/users', JSON.stringify({
            "email": email,
            "password": password
        }), {
            headers: {"content-type": "application/json"}
        }).then((res) => console.log(res)).catch(err => console.log(err))
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input id="email" onChange={(e) => { setEmail(e.target.value )}} />
            <label htmlFor="password">Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Signup