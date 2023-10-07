import React from 'react';

const Trainer = ({trainer}) => {
    const {title, image} = trainer;
    return (
        <div className='flex flex-col items-center justify-center bg-base-100 shadow-xl rounded-lg space-y-2 p-4'>
            <img src={image} alt="" className='h-[200px] w-[200px] rounded-full'/>
            <p className='text-xl font-medium'>{title}</p>
            <button className='text-red-500'>See Full Details</button>
        </div>
    );
};

export default Trainer;