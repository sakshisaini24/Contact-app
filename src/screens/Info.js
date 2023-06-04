import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export const Info = () => {
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [phone, setPhone] = useState('')
        async function addInpData(e){
        e.preventDefault();
        const res = await fetch("/addcontact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone
            })
        }).then(res => {
            if (res.ok) {
              return res.json(); 
            } else {
              throw new Error('API request failed');
            }
          })
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error(error);
          });

        if (res.status === 422) {
            console.log("error ");
            alert("error");

        } else {
            console.log("data added");
        }
    }
    return (
        <div>
            <div><Navbar></Navbar></div>
            <div className="container">
                <div className="h1 text-center">Create a New Contact Here!</div>
                <div className="mt-2 mb-3">
                    <Link to="/contactlist" className="m3 btn btn-primary">Go Back to Contact List</Link>
                </div>
                <form>
                    <div className="form-group">
                        <label for="name1">Name</label>
                        <input type="text" class="form-control"  onChange={(e) => setName(e.target.value)} name="name"
                            id="name1" aria-describedby="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label for="inputEmail1">Email</label>
                        <input type="email" class="form-control"  onChange={(e) => setEmail(e.target.value)} name="email"
                            id="email1" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label for="phone1">Phone Number</label>
                        <input type="number" class="form-control"  onChange={(e) => setPhone(e.target.value)} name="phone"
                            id="phone1" placeholder="Enter Phone Number" />
                    </div>
                    <div className="mt-2 mb-3">
                    <button type="submit" onClick={addInpData} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
