import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service, ...props}) => {
    const {id, title, price, image} = service;
    return (
        <div {...props}>
            <div className='space-y-2 flex flex-col justify-center items-center p-4 shadow-xl bg-base-100 rounded-md'>
                <img src={image} alt="" className='h-[250px] w-[450px] rounded-md'/>
                <p className='text-xl font-medium'>{title}</p>
                <p>{price}</p>
                <Link to={`/services/${id}`} className='text-red-500'>See Full Details</Link>
            </div>
        </div>
    );
};

export default Service;