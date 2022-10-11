import React, { useReducer } from 'react';
import styles from './Form.module.css';

const Form = (props) => {

    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        },
        hasBeenSubmitted: false
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_FIRSTNAME_VALUE":
                return {
                    ...state,
                    firstName: {
                        ...state.firstName,
                        value: action.payload
                    }
                }
            case "SET_FIRSTNAME_ERROR":
                return {
                    ...state,
                    firstName: {
                        ...state.firstName,
                        error: action.payload
                    }
                }
            case "SET_LASTNAME_VALUE":
                return {
                    ...state,
                    lastName: {
                        ...state.lastName,
                        value: action.payload
                    }
                }
            case "SET_LASTNAME_ERROR":
                return {
                    ...state,
                    lastName: {
                        ...state.lastName,
                        error: action.payload
                    }
                }
            case "SET_EMAIL_VALUE":
                return {
                    ...state,
                    email: {
                        ...state.email,  
                        value: action.payload
                    }
                }
            case "SET_EMAIL_ERROR":
                return {
                    ...state,
                    email: {
                        ...state.email,
                        error: action.payload
                    }
                }
            case "SET_SUBMITTED_BOOLEAN":
                return {
                    ...state,
                    hasBeenSubmitted: action.payload
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleFirstNameChange = (e) => {
        if (e.target.value.length < 3) {
            dispatch({
                type: "SET_FIRSTNAME_ERROR",
                payload: "First name must be at least 3 characters."
            });
        } else {
            dispatch ({
                type: "SET_FIRSTNAME_ERROR",
                payload: ""
            });
        }
        dispatch({
            type: "SET_FIRSTNAME_VALUE",
            payload: e.target.value
        })
    }

    const handleLastNameChange = (e) => {
        if (e.target.value.length < 3) {
            dispatch({
                type: "SET_LASTNAME_ERROR",
                payload: "Last name must be at least 3 characters."
            });
        } else {
            dispatch ({
                type: "SET_LASTNAME_ERROR",
                payload: ""
            });
        }
        dispatch({
            type: "SET_LASTNAME_VALUE",
            payload: e.target.value
        })
    }

    const handleEmailChange = (e) => {
        if (e.target.value.length < 5) { 
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: "Email must be at least 5 characters"
            });
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
            dispatch({ 
                type: "SET_EMAIL_ERROR", 
                payload: "Invalid email address."
            });
        } else {
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: ""
            });
        }
        dispatch({
            type: "SET_EMAIL_VALUE", 
            payload: e.target.value 
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "SET_SUBMITTED_BOOLEAN",
            payload: true
        })
    }

    const hasBlanks = !state.firstName.value || !state.lastName.value || !state.email.value 
    const hasErrors  = state.firstName.error || state.lastName.error || state.email.error 
    const valid = !hasBlanks && !hasErrors



    return (
        <div className= {styles.form}>
            <fieldset>
                <legend>Form</legend>
                <form onSubmit= {handleSubmit }>
                    <div>
                        <label htmlFor="firstName">First Name: </label>
                        <input id="firstName" type="text" value={state.firstName.value} onChange={ handleFirstNameChange }/>
                        { 
                        state.firstName.error !== null && (<p className={styles.error}>{state.firstName.error}</p>)
                        }
                    </div>
                    <div>
                        <label htmlFor="lastName" >Last Name: </label>
                        <input id="lastName" type="text" value= { state.lastName.value} onChange= { handleLastNameChange } />
                        { 
                        state.lastName.error !== null && (<p className={styles.error}>{state.lastName.error}</p>)
                        }
                    </div>
                    <div>
                        <label htmlFor="email" >Email Address: </label>
                        <input id = "email" type="email" value = {state.email.value} onChange= { handleEmailChange } />
                        { 
                        state.email.error !== null && (<p className={styles.error}>{state.email.error}</p>)
                        }
                    </div>
                    <input type="submit" value="Create User" disabled={!valid} />
                </form>
            </fieldset>
        </div>
    );
}

export default Form;