import { useState } from "react";
import { Link } from "react-router-dom";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTOON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input-component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, displayName } = formFields;

  const restFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onSumbitHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth({ ...user, displayName });
      restFormFields();
    } catch (error) {
      const { code } = error;
      if (code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log("Error while signing up new user", error);
      }
    }
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Signup with your email and password</span>
      <form onSubmit={onSumbitHandler}>
        <FormInput
          inputOptions={{
            label: "Display Name",
            type: "text",
            required: true,
            onChange: inputChangeHandler,
            name: "displayName",
            value: displayName,
          }}
        />
        <FormInput
          inputOptions={{
            label: "Email",
            type: "text",
            required: true,
            onChange: inputChangeHandler,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          inputOptions={{
            label: "Password",
            type: "password",
            required: true,
            onChange: inputChangeHandler,
            name: "password",
            value: password,
          }}
        />
        <Button type="submit" buttonType={BUTOON_TYPE_CLASSES.base}>
          Sign up
        </Button>
        <span>
          Alread have an accout?
          <Link to={"/sign-in"}> Sign In</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUpForm;
