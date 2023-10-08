import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Aos from "aos";
const PlanDetails = () => {
    // animation
    
        Aos.init({
            duration:1500
        })
    
    const {id} = useParams();
    const data = useLoaderData();
    const [plan, setPlan] = useState({});
    useEffect(()=>{
        const planDetails = data.find(element=>element.id == id);
        setPlan(planDetails);
    },[id,data])
    const {title, image, price, details, supplements} = plan;
    return (
        <div data-aos='fade-right'>
            {/* {id} */}
            {/* {data.length} */}
            {/* <p>{title}</p> */}
            <div className="mt-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <img src={image} className="md:h-[50vh] md:w-[50vh] rounded-xl" alt="" />
                <div className="flex flex-col gap-3">
                <p className="text-4xl font-bold">{title}</p>
                <p className="text-red-600 font-bold">${price}</p>
                <p>{details}</p>
                {/* <p>ID: {id}</p> */}
                <ul className="list-disc px-8">
                    {supplements?.map(element=><li>{element}</li>)}
                </ul>
                <button className="bg-red-600 text-white py-2 rounded-lg">Buy Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default PlanDetails;