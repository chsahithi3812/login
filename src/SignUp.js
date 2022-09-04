
import React from "react"
import GoogleButton from 'react-google-button'
import img from "./img.jpg"
export default function (props) {
  return (
    <div className="container">
    <div className="Auth-form-container">
    <img className="image" src={img} />
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p className="text"> OR </p>
            <GoogleButton className="signinbutton"
  onClick={() => { console.log('Google button clicked') }}
/>
          </div>
     
        </div>
      </form>
      </div>

    </div>
  )
}