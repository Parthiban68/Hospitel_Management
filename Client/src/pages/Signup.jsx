import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SignupForm = () => {

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-center mb-4">Sign Up</h3>
          <form >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
               
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
          <h6 className="mt-5">Already have an Account? please login  <NavLink to="/login">
          <button className="btn btn-outline-success" type="submit">
            Login
            </button>
            </NavLink> </h6> 
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
