import { AuthModalState } from '@/atoms/authModalAtom';
import Navbar from '@/components/Navbar/Navbar';
import Signup from '@/components/Signup/Signup';
import AuthModal from '@/components/modals/AuthModal';
import React from 'react';
import { useRecoilValue } from 'recoil';

type AuthPageProps = { };

const AuthPage:React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(AuthModalState)
    return <div className='bg-background-blue h-screen relative'>
                        <div className='max-w-7xl mx-auto'>
                            <Navbar/>
                            <div className="slogan bg-light-blue py-0  rounded text-white h-80 opacity-20"> 
                            </div>   
                                <div className="text absolute py-8 px-4  rounded bottom-40 right-20 w-72 z-10  ">
                                    <h1 className='flex text-4xl font-light justify-center my-10 ' > </h1>
                                        <p className='flex text-3xl  text-center text-white font-bold  relative z-10 mb-4 '>Estudia, practica y resuelve retos de código </p> 
                                        <p className=' flex text-1xl text-center text-dark-yellow relative z-10  '>con roadmap optimizado, puzzles y space repetition! de Co para el 🌎 </p>     
                                </div>       
                                <img src="/puzzles.jpg" alt="coding Books" className="bg-cover h-screen absolute bottom-0 right-0 opacity-40" />      
                                <img src="/coding.jpg" alt="coding" className='w-96 py-0 rounded  absolute bottom-0 z-10 opacity-30 mx-0 '/>
                                {authModal.isopen && <AuthModal/>}
                        </div>
                </div>;
}
export default AuthPage;