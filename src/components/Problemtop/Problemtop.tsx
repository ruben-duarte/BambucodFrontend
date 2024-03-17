import Link from 'next/link';
import React from 'react';

type ProblemtopProps = {
    
};

const Problemtop:React.FC<ProblemtopProps> = () => {
    
    return <nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-light-blue  text-light-blue-7 text-white border-1'>
    <div className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}>
        <Link href='/' className='h-[22px] flex-1'>
            <img src='/bambucodeLogo.jpg' alt='Logo' className='h-full' />
        </Link>

        <div className='flex items-center space-x-4 flex-1 justify-end'>
            <div>
                <a
                    href='#'
                    target='_blank'
                    rel='noreferrer'
                    className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
                >
                    Version Pro
                </a>
            </div>
            <Link href='/auth'>
                <button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded '>Iniciar Sesion</button>
            </Link>
        </div>
    </div>
</nav>
}
export default Problemtop;