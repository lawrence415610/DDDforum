import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, password });
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
          <label>Password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn--primary" type="submit">
          Submit
        </button>
        <p>
          Don't have an account? <Link to="/join">Join here</Link>
        </p>
      </form>
    </Layout>
  );
};

export { LoginPage };
