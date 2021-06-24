import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [state, handleSubmit] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");


  if (state.succeeded) {
    return (
      <div className="contact">
        <br />
        <p>Thanks for your message! I will be contacting you if necessary</p>
      </div>
    );
  }
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Name : </label>
        <input
          id="name"
          type="text"
          name="text"
          placeholder="Your Name"
          value={name}
          onChangeText={(text) => setName(text)}
          required
        />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Emai address"
          required
        />
        <br />
        <label htmlFor="email">Phone No.: </label>
        <input
          id="phone"
          type="number"
          value={number}
          onChangeText={(text) => setNumber(text)}
          placeholder="Mobile number "
          required
        />
        <br />
        <textarea
          required
          id="message"
          name="message"
          placeholder="Enter your message here"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <br />
        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      </form>
      <br />
      <div className="contact_text">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
        </p>
      </div>
    </div>
  );
}

export default ContactUs;