import React from 'react';

function TaskListNumbers({ tasks }) {
    return (
        <div className='flex mt-10 justify-between screen gap-4'>
            <div className='px-10 py-6 rounded-xl w-[45%] bg-red-400 text-white p-5 rounded-md flex flex-col justify-center items-center'>
                <h2 className='text-3xl'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='px-10 py-6 rounded-xl w-[45%] bg-blue-400 text-white p-5 rounded-md flex flex-col justify-center items-center'>
                <h2 className='text-3xl'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='px-10 py-6 rounded-xl w-[45%] bg-green-400 text-white p-5 rounded-md flex flex-col justify-center items-center'>
                <h2 className='text-3xl'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='px-10 py-6 rounded-xl w-[45%] bg-yellow-400 text-white p-5 rounded-md flex flex-col justify-center items-center'>
                <h2 className='text-3xl'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
        </div>
    );
}

export default TaskListNumbers;