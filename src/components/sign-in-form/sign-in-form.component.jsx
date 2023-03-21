import { useState } from "react";
import Button, { BUTOON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input-component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
import { Link } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  // redirect to home if logged in

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
      await signInUserWithEmailAndPassword(email, password);
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
      <h2>Sign In</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={signInWithEmailAndPassword}>
        <FormInput inputOptions={filedsOptions[0]} />
        <FormInput inputOptions={filedsOptions[1]} />
        <div className="buttons-container">
          <Button type="submit" buttonType={BUTOON_TYPE_CLASSES.base}>
            SIGN IN
          </Button>
          <Button
            buttonType={BUTOON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
            type="button"
          >
            GOOGLE SIGN IN
          </Button>
        </div>
        <span>
          Do'nt have an account?
          <Link to={"/sign-up"}> Sign Up</Link>
        </span>
      </form>
    </div>
  );
};

export default SignInForm;
