import React, { useState } from  'react';
    
    
const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    
    const createUser = (e) => {
        e.preventDefault();

        setFirstName(e.target[0].value);
        if(e.target[0].value.length < 1) {
            setFirstError("First name is required");
        } else if(e.target[0].value.length < 3) {
            setFirstError("Name needs to be at least 2 characters long.");
        }

        setLastName(e.target[1].value);
        if(e.target[1].value.length < 1) {
            setLastError("Last name is required");
        } else if(e.target[1].value.length < 3) {
            setLastError("Name needs to be at least 2 characters long.");
        }

        setEmail(e.target[2].value);
        if(e.target[2].value.length < 1) {
            setEmailError("Email is required");
        } else if(e.target[2].value.length < 5) {
            setEmailError("Email needs to be at least 5 characters long.");
        }

        setPassword(e.target[3].value);
        if(e.target[3].value.length < 1) {
            setPasswordError("Password is required");
        } else if(e.target[3].value.length < 8) {
            setPasswordError("Pasword needs to be at least 8 characters long.");
        }

        setConfirmPassword(e.target[4].value);
        if(e.target[4].value.length < 1) {
            setConfirmPasswordError("Password required confirmation");
        } else if(e.target[4].value.length < 3) {
            setConfirmPasswordError("Does not match Password.");
        }
        
        const newUser = { firstName, lastName, email, password, confirmPassword };
        props.userData(newUser)
    };
    

    
    return(
        <>
            <h1>Create an Account:</h1>
            <form onSubmit={ createUser }>
                <div className="form-group">
                    <label>First Name: </label> 
                    <input type="text" name="firstName" className="form-control" onChange={ (e) => setFirstName(e.target.value)} />
                    {
                    firstError ?
                    <p style={{color:'red'}}>{ firstError }</p> :
                    ''
                    }
                </div>
                <div className="form-group">
                    <label>Last Name: </label> 
                    <input type="text" name="lastName" className="form-control" onChange={ (e) => setLastName(e.target.value)} />
                    {
                    lastError ?
                    <p style={{color:'red'}}>{ lastError }</p> :
                    ''
                    }
                </div>
                <div className="form-group">
                    <label>Email Address: </label> 
                    <input type="text" name="email" className="form-control" onChange={ (e) => setEmail(e.target.value)} />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                    }
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" name="password" className="form-control" onChange={ (e) => setPassword(e.target.value)} />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                    }
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" className="form-control" onChange={ (e) => setConfirmPassword(e.target.value)} />
                    {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                    }
                </div>
                <input type="submit" value="Create User" className="btn btn-primary mt-2"/>
            </form>
            {/* <h1>Your Information:</h1>
            <p>Name: {firstName} {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p> */}
        </>
    );
};
    
export default UserForm;