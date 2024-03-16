import React from 'react';
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useSetRecoilState } from 'recoil';
import { AuthModalState } from '@/atoms/authModalAtom';

type SignUpProps = {};

const SignUp:React.FC<SignUpProps> = () => {
    const setAuthModalState = useSetRecoilState(AuthModalState)
    const manageClick = () => {
        setAuthModalState((prev) => ({ ...prev, type:"login"}));
    }
    return (
        <form action="#" className='space-y-6 px-6 py-4'>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300 '>
                Email  
            </label>

            <input type="email" name='email' id='email' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='📧  texto@company.com'
            />
        </div>
        <div>
            <label htmlFor="displayName" className='text-sm font-medium block mb-2 text-gray-300 '>
                Ingresa tu nombre 
                
            </label>

            <input type="displayName" name='displayName' id='displayName' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='📄  Tu nombre aqui'
            />
        </div>
        <div>
            <label htmlFor="displayName" className='text-sm font-medium block mb-2 text-gray-300 '>
                Ingresa tu apellido
                
            </label>

            <input type="displayName" name='displayName' id='displayName' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='📑  Tu apellido aqui'
            />
        </div>
        <div>
            <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300 '>
                Contraseña
            </label>
            <input type="password" name='password' id='password' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='🔐  ********'
            />
        </div>
        <button type='submit' className='w-full text-white focus:ring-blue-500 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center bg-light-blue hover:bg-dark-blue'>
            Registrate
        </button>

        <div className='text-sm font-medium text-gray-500'>
            ¿Ya tienes una cuenta? {"     "}
            <a href="#" className='text-blue-700 hover:underline' onClick={manageClick}>
                Iniciar sesión
            </a>
        </div>
    </form>
    );
}
export default SignUp;