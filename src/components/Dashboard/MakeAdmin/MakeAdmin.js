import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const {user} = useAuth()
    // const [email, setEmail] = useState('')
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response =>response.json())
        .then(data => {
            if(data.modifiedCount){
                swal("Good job!", "Admin added successfully!", "success");
                reset()
            }
        })
    }
    return (
        <div className="container text-center mt-5">
            <div className="chose-head ">
               
                <h2>Please Assign An Admin</h2>
            </div>
           <div className="form-div mt-5">
           <form onSubmit={handleSubmit(onSubmit)}>
            
            <input  className="form-div-input " {...register("email")} placeholder="Email" />
            
            <input className="form-btn" type="submit" />
            </form>
           </div>

        </div>
    );
};

export default MakeAdmin;