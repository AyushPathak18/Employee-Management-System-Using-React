import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <div id="tasklist" className='h-[55%] overflow-x-auto w-full flex items-center text-white justify-start gap-5 flex-nowrap py-5  mt-10'>
            <div className='h-full flex-shrink-0 w-[400px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'> 
                <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2025</h4>
                </div>
                <h2 className='text-2xl font-semibold mt-5'>Make a youtube video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.</p>
            </div>
            <div className='h-full flex-shrink-0 w-[400px] p-5 bg-green-400 rounded-xl'>
                <div className='flex justify-between items-center'> 
                <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2025</h4>
                </div>
                <h2 className='text-2xl font-semibold mt-5'>Make a youtube video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.</p>
            </div>
            <div className='h-full flex-shrink-0 w-[400px] p-5 bg-yellow-400 rounded-xl'>
                <div className='flex justify-between items-center'> 
                <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2025</h4>
                </div>
                <h2 className='text-2xl font-semibold mt-5'>Make a youtube video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.</p>
            </div>
            <div className='h-full flex-shrink-0 w-[400px] p-5 bg-blue-400 rounded-xl'>
                <div className='flex justify-between items-center'> 
                <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2025</h4>
                </div>
                <h2 className='text-2xl font-semibold mt-5'>Make a youtube video</h2>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.</p>
            </div>
           
            
        </div>
    );
};

export default TaskList;