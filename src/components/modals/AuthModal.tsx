import React, { useEffect } from 'react';
import { FaWindowClose } from "react-icons/fa";
import Login from './Login';
import SignUp from './SignUp';
import RessetPasword from './RessetPasword';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AuthModalState } from '@/atoms/authModalAtom';

type AuthModalProps = {};

const AuthModal:React.FC<AuthModalProps> = () => {
    const authModal = useRecoilValue(AuthModalState);
    const closeModal = useCloseModal();
    return (
        <>
			<div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90' onClick={closeModal}></div>
			<div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
				<div className='relative w-full h-full mx-auto flex items-center justify-center'>
					<div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-light-blue to-slate-900 mx-6'>
						<div className='flex justify-end p-2'>
							<button
								type='button'
								className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white' onClick={closeModal}
							>
								<FaWindowClose className='h-6 w-6' />
							</button>
						</div>
                         {authModal.type === 'login' ? <Login/> : authModal.type === 'register'  ? <SignUp/>: <RessetPasword/>}
					</div>
				</div>
			</div>
		</>
    );
}
export default AuthModal;

function useCloseModal(){
    const setAuthModal = useSetRecoilState(AuthModalState);
    const closeModal = () => {
        setAuthModal((prev) => ({ ...prev, isopen: false, type: 'login'}));
    }
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'escape') closeModal();
        }
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [])

    return closeModal;
}