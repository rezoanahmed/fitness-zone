import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {id} = useParams()
    const [serviceDetails, setDetails] = useState({});
    // useEffect(()=>{
    //     fetch('/gym.json')
    //     .then(res=>res.json())
    //     .then(data=>setDetails(data));
    // },[])

    const data = useLoaderData();
    useEffect(()=>{
        const serviceDetails = data.find(element=>element.id==id);
        setDetails(serviceDetails)
    },[id, data])
    const {title, image, details, price, facilities} = serviceDetails;

    return (
        <div>
            {/* <p>{id}</p> */}
            <div className='mt-10 space-y-2 p-4'>
                <img src={image} alt="" className='h-[50vh] mx-auto' />
                <h1 className='text-center text-4xl font-semibold'>{title}</h1>
                <p className='text-center text-red-500 font-bold'>{price}</p>
                <p className='text-center'>{details}</p>
                <p className='font-medium md:text-4xl mt-10'>Facilities for {title}</p>
                <ul className='list-disc px-8'>
                    {facilities?.map(e=><li>{e}</li>)}
                </ul>
            </div>
            
        </div>
    );
};

export default ServiceDetails;