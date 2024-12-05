import React from "react";

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 w-50 h-100 mt-4">
          <img
            src="https://www.psghospitals.com/wp-content/uploads/2022/03/banner2.jpg" 
            alt="Login Illustration"
            className="img-fluid w-100 h-100 rounded"
            style={{ Height: '1000px', objectFit: 'cover' }} 
          />
        </div>
        <div className="col-md-5 mt-4">
          <h3 className="text-center mb-4">Sign Up</h3>
          <form>
            {/* Email Field */}
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
            {/* Password Field */}
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
            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
