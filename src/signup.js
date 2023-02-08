import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";




const Signup=()=>{
    return(
        <>
        <Header/>
       
  <div className="container mt-5  h-custom">
    <div className="row d-flex  justify-content-center ">
     
      <div className="col-md-8   card m-2 col-lg-8 col-xl-4  mt-5">
        <div className="card-body shadow">
          <div className="d-flex  flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div className="divider d-flex align-items-center ">
            <p className="text-center fw-bold mx-5 mb-0">Or</p>
          </div>

          
          <div className="form-outline ">
          <label className="form-label text-primary" >Enter Your Name</label>
            <input type="email"  className="form-control form-control-lg"
              placeholder="Enter Your Name" />
            
          </div>

          
          <div className="form-outline ">
          <label className="form-label text-primary" >Enter Your Number</label>
            <input type="email"  className="form-control form-control-lg"
              placeholder="Enter Your Number" />
            
          </div>

          
          <div className="form-outline ">
          <label className="form-label text-primary" > Enter Email address</label>
            <input type="email"  className="form-control form-control-lg"
              placeholder="Enter Email address" />
            
          </div>

          
          <div className="form-outline ">
          <label className="form-label text-primary" >Password</label>
            <input type="password"  className="form-control form-control-lg"
              placeholder="Enter password" />
            
          </div>
          <div className="form-outline ">
          <label className="form-label text-primary" >Confirm Password</label>
            <input type="password"  className="form-control form-control-lg"
              placeholder="Confirm Password" />
            
          </div>


          <div className="text-center  mt-4 pt-2">
            <Link to="/login" type="button" className="btn btn-primary "
              >Resister</Link>
           
          </div>

        </div>
      </div>
    </div>
  </div>
  
    
    
  

         
        </>
        
    )


}
export default Signup;