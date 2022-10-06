import React, { useState } from 'react';

const UserForm = (props) => {
    // const [isValid, setIsValid] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [Users, setUsers] = useState([]);
    
    // useEffect( ( ) => {
    //         validate()
    // },[ firstName, lastName, email, password, confirmPassword, firstNameError, lastNameError, emailError, passwordError, confirmPasswordError ] );

    const hasBlanks = !firstName || !lastName || !email || !password || !confirmPassword 
    const hasErrors  = firstNameError || lastNameError || emailError || passwordError || confirmPasswordError
    const valid = !hasBlanks && !hasErrors

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
            console.log(firstNameError); 
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");

        } else if(e.target.value.length < 2) {
            setLastNameError("Last name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Confirm password is required!");
        } else if(e.target.value !== password) {
            setConfirmPasswordError("Password and confirm password do not match!");
        } else {
            setConfirmPasswordError("");
        }
    }

    // const validate = () => {
    //     const anyBlanks = !firstName || !lastName || !email || !password || !confirmPassword 
    //     if(!firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError && !anyBlanks ) {
    //         setIsValid(true);
    //     } else {
    //         setIsValid(false);
    //     }
    // }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        setUsers([...Users, newUser])
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
    }

    return (
        <div>
            <fieldset>
                <legend>New User</legend>
                {hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <form onSubmit={ createUser }>
                    <div>
                        <label>First Name: </label>
                        <input type="text" value={firstName} onChange={ handleFirstName } />
                        {
                            firstNameError ?
                            <p style={{color:"red"}}>{ firstNameError }</p> :
                            null
                        }
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" value={lastName} onChange={ handleLastName } />
                        {
                            lastNameError ?
                            <p style={{color:"red"}}>{ lastNameError }</p> :
                            null
                        }
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input type="email" value={email} onChange={ handleEmail } />
                        {
                            emailError ?
                            <p style={{color:"red"}}>{ emailError }</p> :
                            null
                        }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" value={password} onChange={ handlePassword } />
                        {
                            passwordError ?
                            <p style={{color:"red"}}>{ passwordError }</p> :
                            null
                        }
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="password" value={confirmPassword} onChange={ handleConfirmPassword } />
                        {
                            confirmPasswordError ?
                            <p style={{color:"red"}}>{ confirmPasswordError }</p> :
                            null
                        }
                    </div>

                    <input type="submit" value="Create User" disabled={!valid} />

                </form>
            </fieldset>
            <div>
                <h3>Your Form Data</h3>
                <p>
                    <label>First Name: </label> {firstName}
                </p>
                <p>
                    <label>Last Name: </label> {lastName}
                </p>
                <p>
                    <label>Email: </label> {email}
                </p>
                <p>
                    <label>Password: </label> {password}
                </p>
                <p>
                    <label>Confirm Password: </label> {confirmPassword}
                </p>
            </div>
        </div>

    );
};

export default UserForm;