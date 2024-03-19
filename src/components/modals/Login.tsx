import { AuthModalState } from '@/atoms/authModalAtom';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type LoginProps = {};

const Login:React.FC<LoginProps> = () => {
    //Url del backend para autenticacion
    const USER_API_AUTH_URL = 'http://localhost:8081/api/v1/auth';
    // definir hooks para fetch la data y guardar la data en el estado
    

    const setAuthModalState = useSetRecoilState(AuthModalState)
    const manageClick = (type: "login" | "register" | "forgotPassword") => {
        setAuthModalState((prev) => ({ ...prev, type}));
    }
    return (
    <form action="#" className='space-y-6 px-6 py-4'>
        <h3 className='text-xl font-medium text-white'>Ingresa a Bambucod.</h3>
    
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300 '>
                Ingresa tu email  
            </label>

            <input type="email" name='email' id='email' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='texto@company.com'
            />
        </div>
        <div>
            <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300 '>
                Ingresa tu contraseña
            </label>
            <input type="password" name='password' id='password' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='********'
            />
        </div>
        <button type='submit' className='w-full text-white focus:ring-blue-500 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center bg-light-blue hover:bg-dark-blue'>
            Iniciar Sesion
        </button>
        <button className='flex w-full justify-end' onClick={() => manageClick("forgotPassword")}>
            <a href="#" className='text-sm block text-brand-orange hover:underline w-full text-right'>
                ¿Olvido el Password?
            </a>
        </button>
        <div className='text-sm font-medium text-gray-500'>
            ¿No está registrado? {"     "}
            <a href="#" className='text-blue-700 hover:underline' onClick={() => manageClick("register")}>
                Crear cuenta
            </a>
        </div>
    </form>
    );
}
export default Login;