import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Aos from "aos";

const TrainerDetails = () => {
    // animation
        Aos.init({
            duration: 1500
        })
   
    const {id} = useParams();
    const data = useLoaderData();
    const [trainer, setTrainer] = useState({});
    useEffect(()=>{
        const trainerDetails = data.find(element => element.id==id);
        setTrainer(trainerDetails);
    },[id, data])

    const {image, title, details, price} = trainer;
    
    return (
        <div data-aos='fade-right'>
            {/* <p>Trainer Id: {id}</p> */}

            {/* <p>{data.length}</p> */}
            <div className="mt-10">
                <div className="flex flex-col items-center justify-center gap-10">
                <img src={image} className="h-[70vh] rounded-xl" alt="" />
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

export default TrainerDetails;