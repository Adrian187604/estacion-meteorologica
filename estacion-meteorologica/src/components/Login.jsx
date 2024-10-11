import React from 'react'
import '../styles/Login.css'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className='container-exterior'>
      <div className='container'>
        <form action="">
          <h1>Login</h1>

          <div className='input-box'>
            <input type="email" placeholder='Ingresa tu correo' id='email' />
            <MdEmail className='icon' />

          </div>
          <div className='input-box'>
            <input type="password" placeholder='Ingresa tu contraseña' id='pass' />
            <RiLockPasswordFill className='icon' />

          </div>

          <button type='submit'>Login </button>

          <div className='register'>
            <p>No tienes cuenta? <a href="/registro">Registrate</a> </p>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
