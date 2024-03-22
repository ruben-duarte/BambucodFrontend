
import NextAuth from 'next-auth';
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
          
          if (res.ok) {
            console.log(response);
            return { ...credentials, token: response.message };
          } else{
            throw new Error(response.message); // Si la autenticación falla, lanzar un error
          }
        },
      }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            // Si el usuario se acaba de autenticar, tomar el token del objeto 'user'
            if (user) {
              token.accessToken = user.token;
              
            }
            return token;
          },          
        session: async ({ session, token }) => {
          session.accessToken = token.accessToken;
          return session;
        },
        async redirect({ url, baseUrl }) {
          // Siempre redirige al usuario a la página especificada después del inicio de sesión
          return baseUrl + '/auth';
        },
        
        
      },
  });
