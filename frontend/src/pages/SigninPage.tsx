import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

const SigninPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, userName, firstName, lastName });
  };

  return (
    <Layout>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button className="btn--primary" type="submit">
          Submit
        </button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </Layout>
  );
};

export { SigninPage };
