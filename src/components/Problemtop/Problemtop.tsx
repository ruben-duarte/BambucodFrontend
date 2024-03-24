import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logout from '../ButtonLogout/Logout';

type ProblemtopProps = {
    
};

const Problemtop:React.FC<ProblemtopProps> = () => {
    
    return <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-light-blue text-light-blue-7 text-white border-1'>
    <div className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}>
        <Link href='/' className='h-[22px] flex-1'>
            <Image src='/bambucodeLogo.jpg' alt='Logo' height={150} width={120} className='rounded' />
        </Link>

        <div className='flex items-center space-x-4 flex-1 justify-end'>
            <div>
                <a
                    href='#'
                    target='_blank'
                    rel='noreferrer'
                    className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-dark-yellow hover:bg-dark-fill-2'
                >
                    Quiero apoyar Bambucod 🎵
                </a>
            </div>
            <Link href='/'>
                <button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded '>Inicio</button>
            </Link>
            <Logout/>
        </div>
    </div>
</nav>
}
export default Problemtop;