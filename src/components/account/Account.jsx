import React, { useEffect, useState } from "react";
import "./Account.css";


export default function Account({transformX}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const [loginView, setLoginView] = useState('Sign Up');

    useEffect(() => {
        setTimeout(function() {
            setMessage("");
        }, 15000)
    }, [message])


    const handleInputChange = (e, type) => {
        switch (type) {
            case "user":
                setError("");
                setUsername(e.target.value);
                if(e.target.value === "") {
                    setError("User name has left blank!");
                }
                break;
            case "email":
                setError("");
                setEmail(e.target.value);
                if(e.target.value === "") {
                    setError("Email has left blank!");
                }
                break;
            case "password":
                setError("");
                setUserPassword(e.target.value);
                if(e.target.value === "") {
                    setError("Password has left blank!");
                } 
                break;
            default:
        }
    }


    const checkPassword = () => {
        if(userPassword.length < 8) {
            setError("Password must contain more than 8 characters!");
        }
    }

    return(
        <div id="account" className="account-wrapper" style={{transform: `translateX(${transformX}%)`}}>


            <form action="registration.php" method="GET">
                <h1> {loginView} </h1>
                <p>
                    {
                        message !== "" ?
                        <span className="success"> {message} </span> :
                        <span className="error"> {error} </span> 
                    }
                </p>

                {
                    loginView == "Sign Up" ? 
                    <label>
                    <input type="text" name="username" value={username} placeholder="name" onChange={(e) => {handleInputChange(e, "user")}} />
                    </label> :
                    null
                }

                <label>
                    <input type="email" name="email" value={email} placeholder="email" onChange={(e) => {handleInputChange(e, "email")}} 
                    />
                </label>
                <label>
                    <input type="password" name="password" value={userPassword} placeholder="password" onChange={(e) => {handleInputChange(e, "password")}}
                    onBlur={checkPassword}
                    />
                </label>
                <label>
                    <input
                        type="submit"
                        value="Sign up"
                    />
                </label>
                <p>
                    <a href="#" onClick={() => setLoginView('Sign Up')}> <u> <i> Sign Up </i></u></a>
                    <a href="#" onClick={() => setLoginView('Log In')}> <u> <i> Log In </i></u></a>
                </p>
            </form>
        </div>
    )
}