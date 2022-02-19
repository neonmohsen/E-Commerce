import "./customBotton.style.scss"

export default function CustomButton({children ,isGoogleSignIn, ...props}){
    return(
        <>
            <button className = {`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} type = "submit" {...props}>
                {children}
            </button>
        </>
    )
}