import React, { useState } from 'react';
import { signIn } from '../api';
import Home from './Home';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const [isSignError, setIsSignError] = useState(false);

  const signInUser = async (e) => {
    e.preventDefault();
    const body = await signIn(email, password);
    console.log(body);
    if (body.isAuthenticated) {
      setIsSigned(true);
    } else {
      setIsSignError(true);
    }
  };

  return (
    <>
      {!isSigned ? (
        <>
          <h1>¿Ya eres miembro? </h1>
          <div className="mainContainer">
            <form className="formContainer">
              <input className="form-field" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="form-field" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button onClick={signInUser} className="button">
                Inicia sesión
              </button>
              {isSignError && (<div className='formResponse'>Usuario invalido </div>)}
            </form>
          </div>
        </>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Form;




/*import {useState} from 'react'

//export const Login = () => {
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState(""); 
  
  const handlesSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/")
  };

    return (
    <form action="" onSubmit={() => {}}>
        <input
        value={email} 
        type="text" 
        placeholder="email" 
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        value={password}
        type="password"     
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit'>Login</button>
    </form>
  );
};
export default Login;*/
