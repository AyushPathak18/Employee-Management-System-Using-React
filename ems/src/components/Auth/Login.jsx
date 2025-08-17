import React from 'react';

const Login = () => {
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
           <div className='border-2 border-emerald-600 p-20'>
            <form className='flex flex-col items-center justify-center'>
                <input className='text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-grey' type="email" placeholder="Enter your email address"/>
                <input className='text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-grey mt-3' type='password' placeholder='Enter your password'/>
                <button className='text-white outline-none  bg-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-grey mt-3'>Login</button>
            </form>
           </div>
        </div>
    );
};

export default Login;