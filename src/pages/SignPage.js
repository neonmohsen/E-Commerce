import "./SignPage.style.scss"

import SignIn from "../components/sign-in/signIn";
import SignUp from "../components/sign-up/signUp"

export default function SignPage(){
    return(
        <>
            <div className = "sign-in-and-sing-up">
                <SignIn />
                <SignUp />
            </div>
        </>
    )
}