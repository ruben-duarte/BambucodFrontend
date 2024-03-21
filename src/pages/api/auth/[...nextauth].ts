
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';

const USER_API_AUTH_URL = 'http://localhost:8081/api/v1/auth'

export default NextAuth({
    providers: [
        CredentialsProviders({
        // El nombre que aparecerá en la interfaz de NextAuth
        name: 'Credentials',
        credentials: {
          // No necesitas definir las credenciales aquí si estás capturándolas desde un formulario
        },
        authorize: async (credentials) => {
          // Aquí debes crear una solicitud a tu API de backend de Spring Boot
          const res = await fetch(`${ USER_API_AUTH_URL }/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });
          const response = await res.json();
          
          if (res.ok && response) {
            console.log(response);
            return response; // Si la autenticación es exitosa, NextAuth creará una sesión
            
          } else{
            throw new Error('Autenticación fallida'); // Si la autenticación falla, lanzar un error
          }
        },
      }),
    ],
    // ...otros ajustes de NextAuth.js
  });
