import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <div id="tasklist" className='h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5  mt-10'>
            <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'> 
                <h3 className='bg-red-500 px-3 py-1 rounded'>High</h3>
                <h4>20 feb 2025</h4>
                </div>
            </div>
           
            
        </div>
    );
};

export default TaskList;