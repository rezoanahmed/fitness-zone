import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const TrainerDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [trainer, setTrainer] = useState({});
    useEffect(()=>{
        const trainerDetails = data.find(element => element.id==id);
        setTrainer(trainerDetails);
    },[id, data])

    const {image, title, details, price} = trainer;
    
    return (
        <div>
            {/* <p>Trainer Id: {id}</p> */}

            {/* <p>{data.length}</p> */}
            <div className="mt-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <img src={image} className="md:h-[50vh] md:w-[50vh] rounded-xl" alt="" />
                <div className="flex flex-col gap-3">
                <p className="text-4xl font-bold">{title}</p>
                <p>ID: {id}</p>
                <p>{details}</p>
                <p className="text-red-600 font-bold">${price}/month</p>
                <button className="bg-red-600 text-white py-2 rounded-lg">Hire Now</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;