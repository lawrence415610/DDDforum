import { Layout } from "../components/Layout";
import { toast } from "react-toastify";
import { RegistrationForm } from "../components/RegistrationForm";
import { api } from "../apis";
import { RegistrationInput, ValidationResult } from "../types";

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
  const handleSubmitRegistrationForm = async (input: RegistrationInput) => {
    const validateResult = validateForm(input);
    if (!validateResult.success) {
      toast.error(validateResult.errorMessage);
      return;
    } else {
      try {
        const result = await api.register(input);
        if (result.data.success) {
          toast.success(`User ${result.data.data.userName} has been created!`);
        }
      } catch (error) {
        console.log(error);
        toast.error("Error happened during sending request to server.");
      }
    }
  };
  return (
    <Layout>
      <RegistrationForm
        onSubmit={(input: RegistrationInput) =>
          handleSubmitRegistrationForm(input)
        }
      />
    </Layout>
  );
};

export { SigninPage };
