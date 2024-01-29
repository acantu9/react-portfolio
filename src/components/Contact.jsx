import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Name is required");
    } else if (!email) {
      setEmailError("Email is required");
    } else if (!message) {
      setMessageError("Message is required");
    } else {
      // Send form data to server
      console.log({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setNameError("");
      setEmailError("");
      setMessageError("");
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="error">{nameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {messageError && <p className="error">{messageError}</p>}
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;