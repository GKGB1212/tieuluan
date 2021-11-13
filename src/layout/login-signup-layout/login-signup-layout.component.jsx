import React from "react";
import './login-signup-layout.styles.css';

const LoginSignUpLayout=({children})=>{
    return(
        <div className="LoginSignUpLayout">
            <section></section>
            {children}
        </div>
    )
}

export default LoginSignUpLayout;