import React from 'react';
import { FiLogOut } from 'react-icons/fi';

type LogoutProps = {
    
};

const Logout:React.FC<LogoutProps> = () => {
    

    return (
        <button className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange' >
        <FiLogOut />
    </button>
    );
}
export default Logout;