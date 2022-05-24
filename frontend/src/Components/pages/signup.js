import React from 'react'
import { Component } from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar';

export class signup extends Component {
  render() {
    return (

      <>
        <Navbar />
        <form>
        <h3>Sign Up</h3>
        <p>Please fill in this form to Create an Account.</p>
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" className="form-control"placeholder="First name" required/>
        </div>
        
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" required/>
        </div>
        <div className="mb-3">
          <label>Your Phone</label>
          <input type="tel" className="form-control" placeholder="Your Phone" required/>
        </div>
        <div className="mb-3">
          <label>Your Profession</label>
          <input type="text" className="form-control" placeholder="Your Profession"/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" required/>
        </div>
        <div className="mb-3">
          <label>Choose File</label>
          <input type="file" className="form-control" placeholder="Choose File" required/>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">Sign in?</a>
        </p>
        </form>
        <Footer />
      </>
    )
  }
}

export default signup;