import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import './Login.css';

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const {loginUser,  authError, isLoading} = useAuth()
    const location = useLocation();
    const history = useHistory()



    const handleOnChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[field] = value
        setLoginData(newLoginData)
        console.log(loginData)
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
       
     }
    return (
     <>
     <Navigation></Navigation>
        <div>
             <div className="bg-clr p-1">
             <div className="container mt-5">
                <h1 className="notfound">LOGIN</h1>
            </div>
        </div>
        </div>
        <div className="form-div mt-5 mb-5">
        {!isLoading && 
            <form onSubmit={handleLogin}>
            <input className="form-div-input" type="email" placeholder="Email" name="email" onChange={handleOnChange}/>
            <input className="form-div-input" type="password" placeholder="password" name="password" onChange={handleOnChange} />
            <button className="form-btn" type="submit">Login</button>
            </form>
        
        }

        {isLoading && <div className="text-center">
            
            <div className="spinner-border spinner-color" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>}
            {authError && <div className="container mt-3">
            <div class="alert alert-clr" role="alert">
                {authError}
                </div>
            </div>  }
            <div className="text-center mt-3">
                <Link to="/register" className="text-decoration-none"><p className="create-style">Create account</p></Link>
            </div>
           </div>
        <Footer></Footer>
     </>
    );
};

export default Login;