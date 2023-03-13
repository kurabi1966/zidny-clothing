import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input-component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const restFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        console.log(
          "You closed the popup auth window without selecting a user"
        );
      } else {
        console.log("Error while tring to signin with google account", error);
      }
    }
  };

  const signInWithEmailAndPassword = async (event) => {
    event.preventDefault();
    try {
      const user = await signInUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("No User associated with this email");
          break;
        case "auth/wrong-password":
          alert("Incorrect password");
          break;

        default:
          console.log(error);
          break;
      }
    }
    restFormFields();
  };

  const filedsOptions = [
    {
      label: "Email",
      type: "text",
      required: true,
      onChange: handleFieldChange,
      name: "email",
      value: email,
    },
    {
      label: "Password",
      type: "password",
      required: true,
      onChange: handleFieldChange,
      name: "password",
      value: password,
    },
  ];
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={signInWithEmailAndPassword}>
        <FormInput inputOptions={filedsOptions[0]} />
        <FormInput inputOptions={filedsOptions[1]} />
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button buttonType="google" onClick={signInWithGoogle} type="button">
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
