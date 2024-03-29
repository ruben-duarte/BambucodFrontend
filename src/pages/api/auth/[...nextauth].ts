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
            
            return { id: "", token: response.message, email: response.email };
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
        jwt: async ({ token, user }:any) => {
            // Si el usuario se acaba de autenticar, tomar el token del objeto 'user'
            if (user) {
              token.accessToken = user.token;
              token.email = user.email
            }
            
            return token;
          },          
        session: async ({ session, token }:any) => {
          session.accessToken = token.accessToken;
          
          return session;
        },
        async redirect({ url, baseUrl }) {
          return baseUrl + '/auth';
        },
      },
  });
