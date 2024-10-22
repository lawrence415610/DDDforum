import { useState, useContext } from "react";
import { Layout } from "../components/Layout";
import { toast } from "react-toastify";
import { RegistrationForm } from "../components/RegistrationForm";
import { api } from "../apis";
import { RegistrationInput, ValidationResult } from "../types";
import { Spinner } from "../components/Spinner";
import { UserContext } from "../contexts/userContext";

function validateForm(input: RegistrationInput): ValidationResult {
  const { email, firstName, lastName, userName } = input;
  if (!email || !firstName || !lastName || !userName) {
    return { success: false, errorMessage: "All fields are necessary." };
  }
  if (email.indexOf("@") === -1)
    return { success: false, errorMessage: "Email invalid." };
  if (userName.length < 2) {
    return { success: false, errorMessage: "Username invalid." };
  }
  return { success: true };
}

const SigninPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const handleSubmitRegistrationForm = async (input: RegistrationInput) => {
    const validateResult = validateForm(input);
    if (!validateResult.success) {
      toast.error(validateResult.errorMessage);
      return;
    } else {
      try {
        setLoading(true);
        const result = await api.register(input);
        if (result.data.success) {
          setUser(result.data.data);
          setLoading(false);
          toast.success(`User ${result.data.data.userName} has been created!`);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error("Error happened during sending request to server.");
      }
    }
  };

  return (
    <Layout>
      {loading ? <Spinner /> : ""}
      <RegistrationForm
        onSubmit={(input: RegistrationInput) =>
          handleSubmitRegistrationForm(input)
        }
      />
    </Layout>
  );
};

export { SigninPage };
