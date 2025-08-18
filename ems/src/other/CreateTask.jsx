import React, { useState } from 'react';

const CreateTask = () => {
   

    return (
         <div className='p-5 bg-[#1c1c1c] mt-10 rounded'>
                <form className=' p-5 w-full flex-wrap items-start justify-between flex '>
                    <div className='w-1/2'>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input type="text" className='px-2 rounded py-1 text-sm outline-none bg-transparent w-4/5 border-gray-400 mb-4 border-[1px] ' placeholder='Enter task title' />
                    </div> 
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Deadline</h3>
                    <input type="date" className='px-2 rounded py-1 text-sm outline-none bg-transparent w-4/5 border-gray-400 mb-4 border-[1px]' />
                    </div>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input type='text' className='px-2 rounded py-1 text-sm outline-none bg-transparent w-4/5 border-gray-400 mb-4 border-[1px]' placeholder='Assign to employee' />
                    </div>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input type='text' className='px-2 rounded py-1 text-sm outline-none bg-transparent w-4/5 border-gray-400 mb-4 border-[1px]' placeholder='design,dev,etc' />
                    </div>
                    </div>
                    
                    <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5 '>Task Description</h3>
                    <textarea className='px-2 rounded py-1 text-sm outline-none bg-transparent w-4/5 border-gray-400 mb-4 border-[1px]' placeholder='Enter task description' rows="4"></textarea>
                    </div>
                    
                    <button className='bg-emerald-500 hover:bg-emerald-600 px-5 text-sm p-2 rounded mt-5 w-full'>Create Task</button>
                </form>
            </div>
    );
};

export default CreateTask;