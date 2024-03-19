import React from 'react';

type RessetPaswordProps = {};

const RessetPasword:React.FC<RessetPaswordProps> = () => {
    
    return (
        <form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8' >
        <h3 className='text-xl font-medium  text-white'>Reiniciar Contraseña</h3>
        <p className='text-sm text-white '>
            ¿Has olvidado tu contraseña? ingrese su email  abajo  y le enviaremos un email para reiniciar su contraseña.
        </p>
        <div>
            <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>
                Tu email
            </label>
            <input
                type='email'
                name='email'
                id='email'
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                placeholder='info@company.com'
            />
        </div>

        <button
            type='submit'
            className={`w-full text-white  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
            bg-light-blue hover:bg-brand-orange-s `}
        >
            Reset Password
        </button>
    </form>
    );
}
export default RessetPasword;
