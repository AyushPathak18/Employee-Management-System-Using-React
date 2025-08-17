import React from 'react';

const Header = () => {
    return (
       <div className='flex justify-between items-end text-white'>
            <h1 className='text-2xl font-medium'> Hello <br/> <span className='text-3xl font-semibold'>Ayush 👋</span></h1>
            <button className='bg-red-500 text-lg font-medium text-white px-5 px-2 rounded-small'>Log out</button>
       </div>
    );
};

export default Header;