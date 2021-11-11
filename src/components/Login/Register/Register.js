import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import './Register.css';



const Register = () => {
    
    
    const [loginData, setLoginData] = useState({})
    const {registerUser, isLoading, user, authError} = useAuth()
  
    const handleOnChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData}
        newLoginData[field] = value
        setLoginData(newLoginData)
       
    }
    const handleLogin = e => {
        if(loginData.password !== loginData.password2 ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password didn\'t match',
                
              })
           
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
       
     }
    return (
        <>
     <Navigation></Navigation>
        <div>
             <div className="bg-clr p-1">
             <div className="container mt-5">
                <h1 className="notfound">CREATE ACCOUNT</h1>
            </div>
        </div>
        </div>
        <div className="form-div mt-5 mb-5">
        {
            !isLoading &&  <form onSubmit={handleLogin}>
            <input className="form-div-input" type="email" placeholder="Email" name="email" onChange={handleOnChange}/>
            <input className="form-div-input" type="password" placeholder="password" name="password" onChange={handleOnChange} />
            <input className="form-div-input" type="password" placeholder="Confirm password" name="password2" onChange={handleOnChange} />
            <button className="form-btn" type="submit">Create an account</button>
            </form>
        }
        {isLoading && <div className="text-center">
       
            <div className="spinner-border spinner-color" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>}
            {user?.email && <div className="container mt-3">
            <div class="alert alert-clr" role="alert">
                Account Created Successfully!
                </div>
            </div> }
            {authError && <div className="container mt-3">
            <div class="alert alert-clr" role="alert">
                {authError}
                </div>
            </div>  }
            <div className="text-center mt-3">
                <Link to="/login" className="text-decoration-none"><p className="create-style">Already have an account?</p></Link>
            </div>
           </div>
        <Footer></Footer>
     </>
    );
};

export default Register;