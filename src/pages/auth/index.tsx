import Navbar from '@/components/Navbar/Navbar';
import Signup from '@/components/Signup/Signup';
import AuthModal from '@/components/modals/AuthModal';
import React from 'react';

type AuthPageProps = { };

const AuthPage:React.FC<AuthPageProps> = () => {
    
    return <div className='bg-light-white h-screen relative'>
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
              <div className="slogan bg-light-blue py-8  rounded text-white h-80"> 
             </div>   
              <div className="text relative z-9 bg-light-white rounded py-10 ">
                <h1 className='flex text-4xl font-light justify-center my-10  ' >Estudia, practica y resuelve retos de código </h1> 
                    <p className=' flex text-2xl justify-center '>con roadmap optimizado, puzzles y space repetition! de Co para el mundo 🌎 </p>     
              </div>       
             <img src="/puzzles.jpg" alt="coding Books" className="bg-cover h-screen absolute bottom-0 right-0 opacity-50" />      
             <img src="/coding.jpg" alt="coding" className='w-40 py-2 absolute bottom-0 z-10 opacity-70 '/>
             <AuthModal/>
        </div>
    </div>;
}
export default AuthPage;