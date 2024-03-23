import React, { useState } from 'react';
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useSetRecoilState } from 'recoil';
import { AuthModalState } from '@/atoms/authModalAtom';
import Swal from 'sweetalert2';

type SignUpProps = {};

const SignUp:React.FC<SignUpProps> = () => {
    const setAuthModalState = useSetRecoilState(AuthModalState)
    const manageClick = () => {
        setAuthModalState((prev) => ({ ...prev, type:"login"}));
    }

    const [registerData, setRegisterData] = useState({
        username : ' ',
        name: ' ',
        lastName: ' ',
        password: ' ',
    })

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(event.target.name.value);
    // };

    const handleChange = (e) => {
        setRegisterData( {
          ...registerData,
          [e.target.name]: e.target.value,
        });
      };

  const BASE_URL = 'http://localhost:8081/api/v1/auth';
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(registerData)

        try {
          const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
          });
          
          const jsonResponse = await response.json();

          if (response.ok) {
            Swal.fire({
              title: "Registro exitoso",
              text: `${jsonResponse.message}`,
              icon: "success"
            })
          }else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: `${jsonResponse .error }`
          })
        }
          
    
        } catch (error) {
          console.error('Error creating user:', error);
        }
      };    


    return (
        <form action="#" className='space-y-6 px-6 py-4' onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300 '>
                Email  
            </label>

            <input type="email" name='username' id='email' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='📧  texto@company.com'  onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="displayName" className='text-sm font-medium block mb-2 text-gray-300 '>
                Ingresa tu nombre 
                
            </label>

            <input type="displayName" name='name' id='displayName' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='📄  Tu nombre aqui' onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="displayName" className='text-sm font-medium block mb-2 text-gray-300 '>
                Ingresa tu apellido
                
            </label>

            <input type="displayName" name='lastName' id='displayName' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='📑  Tu apellido aqui' onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300 '>
                Contraseña
            </label>
            <input type="password" name='password' id='password' className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-blue-600
            border-gray-500 placeholder-gray-400 text-white 
            ' placeholder='🔐  ********' onChange={handleChange}
            />
        </div>
        <button type='submit' className='w-full text-white focus:ring-blue-500 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center bg-light-blue hover:bg-dark-blue'>
            Registrate
        </button>

        <div className='text-sm font-medium text-gray-500 text-center'>
            ¿Ya tienes una cuenta? {"     "}
            <a href="#" className='text-blue-700 hover:underline' onClick={manageClick}>
                Iniciar sesión
            </a>
        </div>
    </form>
    );
}
export default SignUp;