import NextAuth from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';


export default NextAuth({
    providers: [
        CredentialsProviders({
        name: 'Credentials',
        credentials: {},
        authorize: async (credentials) => {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
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
            throw new Error(response.message); 
          }
        },
      }),
    ],
    pages:{
      signIn: '/'
    },
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
          return baseUrl + '/auth';
        },
      },
  });
