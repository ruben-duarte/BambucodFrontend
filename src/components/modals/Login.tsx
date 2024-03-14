import { AuthModalState } from '@/atoms/authModalAtom';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type LoginProps = {};

const Login:React.FC<LoginProps> = () => {
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
            </label>

            <input type="email" name='email' id='email' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='texto@company.com'
            />
        </div>
        <div>
            <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300 '>
                Ingresa tu password
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
            </label>
            <input type="password" name='password' id='password' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='password'
            />
        </div>
        <button type='submit' className='w-full text-white focus:ring-blue-500 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center bg-light-blue hover:bg-dark-blue'>
            Login
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