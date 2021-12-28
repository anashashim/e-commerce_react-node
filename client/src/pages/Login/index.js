import React, {useState, useEffect} from 'react';
import './login.css'

const Login = ({location, history}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // Dummy user login
    const userLogin = {
        email:'test@dummy.com',
        password:'12345'
    };
    const { error, userInfo } = userLogin;
    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if(userInfo)  history.push(redirect)
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e);
    }
    return (
        <div className="login-continer">
            <div className="login-content">
                <form onSubmit={submitHandler}>
                    <h1>Login</h1>
                    {error && <h4>{error}</h4>}
                    <div className="input-div one">
                        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-div pass">
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    
                    <input type="submit" className="btn" value="Login" />
                
                </form>
            </div>
        </div>
    )
}

export default Login;
