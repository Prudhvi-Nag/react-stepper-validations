import React from 'react'
import { Stepper, Step } from "react-form-stepper";
import { useState } from "react";
// import "../FormStepper/style.css"

const FormStepper = () => {
    const [goSteps, setGoSteps] = useState(0);

    const defaultValues={
     
       name:"",
       email:"",
       password:"",
    
      }
    
      const [values , setValues]=useState(defaultValues)
    
    

    return (
      <div>
        <Stepper activeStep={goSteps}>
          <Step onClick={() => setGoSteps(0)} label="Account" />
          <Step onClick={() => setGoSteps(1)} label="Personal" />
          <Step onClick={() => setGoSteps(2)} label="Payment" />
          <Step onClick={() => setGoSteps(3)} label="Finish" />
        </Stepper>
        {goSteps === 0 && (
          <div className='container'>
            <form>
                <h1>Account Information</h1>
            <div className="mb-3">
                <label htmlFor='name'  className="form-label">Name</label>
                <input type="text" className="form-control" placeholder='enter your name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                </div>

                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder='enter your email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder='enter your password' id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => setGoSteps(1)}>Submit</button>
               
                </form>
                        
            {/* <button className="btn" onClick={() => setGoSteps(1)}>
              Next
            </button> */}
          </div>
        )}
        {goSteps === 1 && (
           <div className='container'>
           <form>
               <h1>Presonal Information</h1>
           <div className="mb-3">
               <label htmlFor='name'  className="form-label">Name</label>
               <input type="text" className="form-control" id="name" aria-describedby="name"/>
               
               </div>

               <div className="mb-3">
               <label htmlFor="number" className="form-label">Phone Number</label>
               <input type="number" className="form-control" id="number" aria-describedby="number"/>
               
               </div>
               <div className="mb-3">
               <label htmlFor="address" className="form-label">Address</label>
               <input type="text" className="form-control" id="address"/>
               </div>

               <div className="mb-3">
               <label htmlFor="city" className="form-label">City</label>
               <select className="form-select" aria-label="Default select example">
                <option selected>City</option>
                <option value="1">Vijayawada</option>
                <option value="2">Hyd-1</option>
                <option value="3">Hyd-2</option>
                <option value="3">Kakinada</option>
                </select>
               </div>
               <div className="mb-3">
               <label htmlFor="pinnumber" className="form-label">PIN code</label>
               <input type="number" className="form-control" id="number"/>
               </div>

              
               <button type="submit" className="btn btn-primary" onClick={() => setGoSteps(2)}>Submit</button>
               <button type="submit" className="btn btn-danger ms-1" onClick={() => setGoSteps(0)}>BACK</button>
               </form>
                       
           {/* <button className="btn" onClick={() => setGoSteps(1)}>
             Next
           </button> */}
         </div>
        )}
        {goSteps === 2 && (
          <div className='container'>
            <form>
                <h1>Payment Details</h1>
                <div className="mb-3">
                    <div className='row'>
                        <div className='col'>
                        <div className="me-3">
                            <label htmlFor='fristname'  className="form-label">Frist Name</label>
                            <input type="text" className="form-control" id="fristname" aria-describedby="fristname"/>
                            
                            </div>

                        </div>
                        <div className='col'>
                        <div className="me-3">
                            <label htmlFor='lastname'  className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastname" aria-describedby="lastname"/>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                <label htmlFor="city" className="form-label">Select Card</label>
               <select className="form-select" aria-label="Default select example">
                <option selected>Enter card type</option>
                <option value="1">VISA CARD</option>
                <option value="2">RUPAY CARD</option>
                <option value="3">MASTER CARD</option>
                <option value="3">CONTACTLESS CARD </option>
                </select>
                </div>

                <div className="mb-3">
                    <div className='row'>
                       <div className='col'>
                       <label htmlFor="Cardnumber" className="form-label">Card Number</label>
                        <input type="number" className="form-control" id="Cardnumber"/>
                       </div>
                       <div className='col'>
                       <label htmlFor="cvv" className="form-label">CVV</label>
                        <input type="number" className="form-control" id="cvv"/>
                       </div>
                    </div>

                </div>
                <div className="mb-3">
                <label htmlFor="expirationdate" className="form-label">Expiration Date</label>
                        <input type="number" className="form-control" id="expirationdate"/>

                </div>

                <button type="submit" className="btn btn-primary" onClick={() => setGoSteps(3)}>Submit</button>
                <button type="submit" className="btn btn-danger ms-1" onClick={() => setGoSteps(1)}>BACK</button>
               

            </form>
        </div>
        )}
         {goSteps === 3 && (
          <div className='container'>
           <h2>FINISH</h2>
           <p className='h3'>
            Payment Done Successfully
           </p>
           <button type="submit" className="btn btn-primary 
           " onClick={() => setGoSteps(0)}>DONE</button>
           <button type="submit" className="btn btn-danger ms-1" onClick={() => setGoSteps(2)}>BACK</button>
               

        </div>
        )}
      </div>
    );
  
}

export default FormStepper