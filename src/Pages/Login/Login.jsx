import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [error, setError]= useState("")
    const {signIn} = use(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signIn(email,password)
        .then((result) => {
            const user = result.user;
            navigate(`${location.state ? location.state : "/"}`)
        })
        .catch((error) => {
         const errorCode = error.code;
        //  const errorMessage = error.message;

        //  alert(errorCode,errorMessage)
        setError(errorCode)
        });
    }
    return (
        <form onSubmit={handleLogin} className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" 
          required
          placeholder="Email" />
          <label className="label">Password</label>
          <input 
          required
          name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>

          {error && <p className='text-red-400 text-xs'>{error}</p>}
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link className='text-secondary' to="/auth/register">Register</Link></p>
        </fieldset>
      </div>
    </div>
        </form>
    );
};

export default Login;