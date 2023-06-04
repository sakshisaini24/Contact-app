import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export const Edit = () => {
    const [inpVal, setInp] = useState({
        "name": "",
        "email": "",
        "phone": ""
    });
    const setData = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setInp((preval) => {
            return {
                ...preval,
                [name]: preval
            }
        })
    }
    return (
        <div>
            <div><Navbar></Navbar></div>
            <div className="container">
                <div className="h1 text-center">Edit Contact Here!</div>
                <div className="mt-2 mb-3">
                    <Link to="/contactlist" className="m3 btn btn-primary">Go Back to Contact List</Link>
                </div>
                <form>
                    <div class="form-group">
                        <label for="name1">Name</label>
                        <input type="text" class="form-control" value={inpVal.name} onChange={setData} name="name" id="name1" aria-describedby="name" placeholder="Enter Name" />
                    </div>
                    <div class="form-group">
                        <label for="inputEmail1">Email</label>
                        <input type="email" class="form-control" value={inpVal.email} onChange={setData} name="email" id="email1" placeholder="Enter Email" />
                    </div>
                    <div class="form-group">
                        <label for="phone1">Phone Number</label>
                        <input type="number" class="form-control" value={inpVal.phone} onChange={setData} name="phone" id="phone1" placeholder="Enter Phone Number" />
                    </div>
                    <div className="mt-2 mb-3">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
