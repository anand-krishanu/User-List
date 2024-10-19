import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function () {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        usernName: "",
        email: ""
    })

    const { name, userName, email } = user;

    const onInputChange = (e) => {
        console.log('Input Change:', e.target.name, e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate('/');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <h2 className="text-center m-4 ">Register User</h2>
                        <div className="mb-4">
                            <label htmlFor="Name" className='form-label'>
                                Name
                            </label>
                            <input type={"text"} className="form-control" placeholder='Enter your name...' name='name'
                                value={name} onChange={onInputChange} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="UserName" className='form-label'>
                                Username
                            </label>
                            <input type={"text"} className="form-control" placeholder='Enter your Username...' name='userName'
                                value={userName} onChange={onInputChange} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Email" className='form-label'>
                                Email
                            </label>
                            <input type={"text"} className="form-control" placeholder='Enter your Email...' name='email'
                                value={email} onChange={onInputChange} />
                        </div>
                        <div className="text-center">
                            <button type='submit' className='btn btn-outline-primary'>Submit</button>
                            <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}