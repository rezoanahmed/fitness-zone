import React from 'react';

const Client = ({client}) => {
    const {name, message, image} = client
    return (
        <div>
            <div className='w-[250px] flex flex-col justify-center items-center gap-3 text-center'>
                <img src={image} alt={image} className='h-[200px] w-[200px] rounded-full' />
                <p className='font-semibold text-xl'>{name}</p>
                <p className='text-sm'>{message}</p>
            </div>
        </div>
    );
};

export default Client;