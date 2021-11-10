import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';


const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
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
           <form onSubmit={handleSubmit(onSubmit)}>
            <input  className="form-div-input " {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <input  className="form-div-input " {...register("email", { required: true, maxLength: 20 })} placeholder="Email" />
            <input  className="form-div-input " {...register("password", { required: true, maxLength: 20 })} placeholder="Password" />
            
            <input className="form-btn" type="submit" />
            </form>
            <div className="text-center mt-3">
                <Link to="/login" className="text-decoration-none"><p className="create-style">Already have an account?</p></Link>
            </div>
           </div>
        <Footer></Footer>
     </>
    );
};

export default Register;