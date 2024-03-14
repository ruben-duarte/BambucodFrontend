import Link from 'next/link';
import React from 'react';

type NavbarProps = {};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <div className='flex items-center justify-between sm:px-12 md:px-24 relative z-10'>
            <Link href="/" className='flex items-center justify-center h-20'>
                <img src="/bambucodeLogo.jpg" alt="logo" className='w-24'/>
            </Link>
            <div className="flex items-center">
                <button
                className='bg-light-blue text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2  hover:border-brand-orange border-2 transition duration-300 ease-in-out'
                >
                    Sign In
                </button>
            </div>
    </div>
}
export default Navbar;