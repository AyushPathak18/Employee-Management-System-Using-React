import React from 'react';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center bg-[#1c1c1c] text-white'>
           <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
                submitHandler(e);
                console.log(`Email: ${email}, Password: ${password}`);
            }}className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}}
                required className='text-grey outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-grey' type="email" placeholder="Enter your email address"/>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}}
                required className='text-grey outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-grey mt-3' type='password' placeholder='Enter your password'/>
                <button className='text-white outline-none  bg-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-grey mt-5 w-full'>Login</button>
            </form> 
           </div>
        </div>
    );
};

export default Login;