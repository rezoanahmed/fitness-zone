import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Aos from "aos";

const SponsorDetails = () => {
    // animation
        Aos.init({
            duration: 1000
        })
   
    const {id} = useParams();
    const data = useLoaderData();
    const [sponsor, setSponsor] = useState({});
    useEffect(()=>{
        const trainerDetails = data.find(element => element.id==id);
        setSponsor(trainerDetails);
    },[id, data])

    const {image, title, details} = sponsor;
    
    return (
        <div data-aos='fade-right'>
            {/* <p>Trainer Id: {id}</p> */}

            {/* <p>{data.length}</p> */}
            <div className="mt-10">
                <div className="flex flex-col items-center justify-center gap-10">
                <img src={image} className="h-[70vh2io9] rounded-xl" alt="" />
                <div className="flex flex-col gap-3">
                <p className="text-4xl font-bold">{title}</p>
                <p className="text-sm">Honourable Sponsor of Fitness Zone</p>
                <p>{details}</p>
                
                </div>
                </div>
            </div>
        </div>
    );
};

export default SponsorDetails;