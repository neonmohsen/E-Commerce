import { useState } from "react";
import {useNavigate} from "react-router-dom";

import FormInput from "../form-input/formInput";
import CustomButton from "../custom-button/customBotton";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './signUp.style.scss';

export default function SignUp() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (data.password !== data.confirmPassword) {
            alert("password don't match")
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(data.email, data.password);

            await createUserProfileDocument(user , {displayName : data.displayName});
            setData({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            navigate('/')

        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData({...data,  [name]: value })
    }

    return (
        <>
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                        type="text"
                        value={data.displayName}
                        onChange={handleChange}
                        name="displayName"
                        label="Display Name"
                        required />
                    <FormInput
                        type="email"
                        value={data.email}
                        onChange={handleChange}
                        name="email"
                        label="Email"
                        required />
                    <FormInput
                        type="password"
                        value={data.password}
                        onChange={handleChange}
                        name="password"
                        label="Password"
                        required />
                    <FormInput
                        type="password"
                        value={data.confirmPassword}
                        onChange={handleChange}
                        name="confirmPassword"
                        label="Confirm Password"
                        required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        </>
    )
}

