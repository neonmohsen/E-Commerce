import "./signIn.style.scss";
import FormInput from "../form-input/formInput";
import CustomButton from "../custom-button/customBotton";
import { useState } from "react";

import { signInWithGoogle } from "../../firebase/firebase.utils"

export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({
      email: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({ ...data, [name]: value });
  };

  return (
    <>
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={data.email}
            required
            label="email"
            handleChange={handleChange}
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            value={data.password}
            handleChange={handleChange}
            label="password"
            required
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit">
              Sign in
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    </>
  );
}
