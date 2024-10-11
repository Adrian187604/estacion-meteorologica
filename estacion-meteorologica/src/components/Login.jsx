import React, {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../styles/Login.css'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { auth } from '../servicios/firebase-config';

const Login = () => {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [messageCard, setMessageCard] = useState('')


  const LogeoCorrecto = async (event) => {
    try{
      await signInWithEmailAndPassword(auth, correo, password)
      navigate('/home')
    } catch (err) {
      setError('Error de inicio de sesión')
    }

  }

  return (
    <div className='container-exterior'>
      <div className='container'>
          <h1>Login</h1>

          <div className='input-box'>
            <input 
            type="email" 
            placeholder='Correo electrónico' 
            value={correo}
            onChange={(e) => setCorreo(e.target.value)} />
            <MdEmail className='icon' />

          </div>
          <div className='input-box'>
            <input 
            type="password" 
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
             />
            <RiLockPasswordFill className='icon' />

          </div>

          <button 
          onClick={LogeoCorrecto}
          >Iniciar Sesión </button>

          <div className='register'>
            <p>No tienes cuenta? <a href="/registro">Registrate</a> </p>
          </div>
      </div>
    </div>
  )
}

export default Login
