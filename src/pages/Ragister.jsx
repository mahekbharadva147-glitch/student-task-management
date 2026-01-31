import "./Ragister.css";
import React from "react";

const Ragister = () => {
  return (
    <>
      <div className="form-container">
        {/* Page Title */}
        <h1 className="from-title" >RAGISTER</h1>
        <form>
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number Field */}
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
            />
          </div>

          {/* Submiit Button */}
          <button type="submit" className="btn-primary">
            Ragister
          </button>
        </form>
      </div>
    </>
  );
};

export default Ragister;
