import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, title, price, image} = service;
    return (
        <div>
            <div className='space-y-2 flex flex-col justify-center items-center p-4 shadow-xl bg-base-100 rounded-md'>
                <img src={image} alt="" className='h-[200px] w-[300px]'/>
                <p className='text-xl font-medium'>{title}</p>
                <p>{price}</p>
                <Link to={`/services/${id}`} className='text-red-500'>See Full Details</Link>
            </div>
        </div>
    );
};

export default Service;