import React from "react";
import styled from "styled-components";
import "../Connect.css";

const Connect = () => {
  return (
    <div className="mainPage">
      <h1 className="LetsConnect">Connect With Us</h1>
      <div className="container">
        <div className="contact-form">
          <form
            className="form"
            action="https://formspree.io/f/xnnaqwgz"
            method="POST"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Phone Number (Optional)"
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Query"
              autoComplete="off"
              required
            ></textarea>

            <input className="Button" type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
