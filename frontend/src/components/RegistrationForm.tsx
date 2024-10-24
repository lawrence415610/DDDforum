import { useState } from "react";
import { Link } from "react-router-dom";
import { RegistrationInput } from "../types";

interface RegistrationFormProps {
  onSubmit: (formDetails: RegistrationInput) => void;
}

export const RegistrationForm = (props: RegistrationFormProps) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="registration-form">
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
      <button
        onClick={() =>
          props.onSubmit({
            email,
            firstName,
            lastName,
            userName,
          })
        }
        className="btn--primary"
        type="submit"
      >
        Submit
      </button>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};
