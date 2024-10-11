import React from 'react'
import '../styles/Registro.css'
import { MdEmail, MdDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";



const Registro = () => {
    return (
        <div className='container-exterior'>

            <div className='container'>
                <form action="">
                    <h1>Registro</h1>

                    <div className='input-box'>
                        <input type="text" placeholder='Ingresa tu nombre' id='name' />
                        <MdDriveFileRenameOutline className='icon' />

                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Ingresa tu apellido' id='lastname' />
                        <MdDriveFileRenameOutline className='icon' />

                    </div>

                    <div className='input-box'>
                        <input type="email" placeholder='Ingresa tu correo' id='email' />
                        <MdEmail className='icon' />

                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Ingresa tu contraseña' id='pass' />
                        <RiLockPasswordFill className='icon' />

                    </div>

                    <button type='submit'>Registrar </button>

                    <div className='register'>
                        <p>Ya tienes cuenta? <a href="/">Inicia sesion</a> </p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Registro
