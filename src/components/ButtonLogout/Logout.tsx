import { signOut } from 'next-auth/react';
import React from 'react';
import { FiLogOut } from 'react-icons/fi';

type LogoutProps = {
    
};

const handleSignOut = () => {
    signOut({ redirect: false }).then(() => {
        window.location.href = "/"
    });
}

const Logout:React.FC<LogoutProps> = () => {
    return (
        <button  
            onClick={() =>  handleSignOut()}
        className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange' >
        <FiLogOut />
    </button>
    );
}
export default Logout;