import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";

const Login=()=>{
    return(
        <>
        <Header/>
        <div className="container mt-5  h-custom">
    <div className="row d-flex  justify-content-center align-items-center h-100">
     
      <div className="col-md-8   card m-2 col-lg-6 col-xl-4 offset-xl-1 mt-5">
        <div className="card-body shadow">
          <div className="d-flex  flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Login in with</p>
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
            <input type="email"  className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label" >Email address</label>
          </div>

          
          <div className="form-outline ">
            <input type="password" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" >Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox"  id="form2Example3" />
              <label className="form-check-label" >
                Remember me
              </label>
            </div>
            <Link to="/contact"  className="text-body">Forgot password?</Link>
          </div>

          <div className="text-center  mt-4 pt-2">
            <button type="button" className="btn btn-primary "
              >Login</button>
            <Link to="/signup" className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
            Register
            </Link>
          </div>

        </div>
      </div>
    </div>
  </div>
  
       
        </>
    )


}
export default Login;