import "./customBotton.style.scss"

export default function CustomButton({ children, isGoogleSignIn, inverted, ...props }) {
    return (
        <>
            <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} type="submit" {...props}>
                {children}
            </button>
        </>
    )
}