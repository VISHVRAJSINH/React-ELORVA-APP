import web from "../Website/Image/home.svg";
import React, { useState } from "react";

const Contact =() =>
{   
    const [data, setData] = useState({
        fullname:"",
        lastname:"",
        phone:"",
        email:"",
        msg:"",
    });

    const InputEvent = (event) =>
    {
        const {name , value} = event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        })
    };
    const formsubmit = (e) =>{
        e.preventDefault();
        alert(`${data.fullname}`)
    };
    return (<>
            <div className="my-5  ">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formsubmit}>
                    <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="Enter First name"
                  name="fullname"
                  value={data.fullname} 
                  onChange={InputEvent}   
                  />
                  </div>

                  <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="Enter Last Name"
                  name="lastname"
                  value={data.lastname} 
                  onChange={InputEvent}
                  />
                  </div>

                  <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                  <input 
                  type="number" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="Enter Phone Number"
                  name="number"
                  value={data.phone} 
                  onChange={InputEvent}
                  />
                  </div>

                  <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input 
                  type="email" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="Enter Email"
                  name="email"
                  value={data.email} 
                  onChange={InputEvent}
                  />
                  </div>
                   
                       <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-primary  " type="submit">
                            Submit Form
                        </button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </>);
}

export default Contact;