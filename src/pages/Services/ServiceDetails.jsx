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
            {/* <div className='mt-10 space-y-2 p-4'>
                <img src={image} alt="" className='h-[50vh] mx-auto' />
                <h1 className='text-center text-4xl font-semibold'>{title}</h1>
                <p className='text-center text-red-500 font-bold'>{price}</p>
                <p className='text-center'>{details}</p>
                <p className='font-medium md:text-4xl mt-10'>Facilities for {title}</p>
                <ul className='list-disc px-8'>
                    {facilities?.map(e=><li>{e}</li>)}
                </ul>
            </div> */}
            <div className="mt-10">
                <div className="flex items-center justify-center gap-10">
                <img src={image} className="h-[50vh] w-[50vh] rounded-xl" alt="" />
                <div className="flex flex-col gap-3">
                <p className="text-4xl font-bold">{title}</p>
                <p className="text-red-600 font-bold">{price}</p>
                {/* <p>ID: {id}</p> */}
                <p>{details}</p>
                <ul className='list-disc px-8'>
                    {facilities?.map(e=><li>{e}</li>)}
                </ul>
                
                <button className="bg-red-600 text-white py-2 rounded-lg">Enroll Now</button>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceDetails;