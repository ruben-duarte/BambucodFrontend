import { AuthModalState } from '@/atoms/authModalAtom';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type NavbarProps = {};

const Navbar:React.FC<NavbarProps> = () => {
    const setAuthModalState = useSetRecoilState(AuthModalState)
    const manageClick = () => {
        setAuthModalState((prev) => ({ ...prev, isopen: true}));
    }
    return <div className='flex items-center justify-between sm:px-12 md:px-24 relative z-10'>
            <Link href="/" className='flex items-center justify-center h-20'>
                <img src="/bambucodeLogo.jpg" alt="logo" className='w-24'/>
            </Link>
            <div className="flex items-center">
                <button
                className='bg-light-blue text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-dark-blue hover:bg-white hover:border-2  hover:border-dark-blue border-2 transition duration-300 ease-in-out'
                onClick={manageClick}
                >
                    Sign In
                </button>
            </div>
    </div>
}
export default Navbar;