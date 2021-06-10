import React, { useState } from 'react'
import './App.css';
import UserForm from './components/UserForm';
import Results from './components/Results';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const addUserData = newUser =>{
    setState({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      confirmPassword: newUser.confirmPassword,
    })
  }

  return (
    <div className="w-25 p-3">
      <UserForm inputs={state} setInputs={setState} userData={addUserData}/>
      <Results output={state}/>
    </div>
    
  );
}

export default App;
