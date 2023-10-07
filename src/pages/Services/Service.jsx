import React from 'react';

const Service = ({service}) => {
    const {title, price, image} = service;
    return (
        <div>
            <div className='space-y-2 flex flex-col justify-center items-center p-4 shadow-xl bg-base-100 rounded-md'>
                <img src={image} alt="" className='h-[200px] w-[300px]'/>
                <p className='text-xl font-medium'>{title}</p>
                <p>{price}</p>
                <p className='text-red-500'>See Full Details</p>
            </div>
        </div>
    );
};

export default Service;