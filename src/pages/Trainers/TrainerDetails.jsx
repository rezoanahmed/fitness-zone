import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const TrainerDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [trainer, setTrainer] = useState({});
    
    return (
        <div>
            <p>Trainer Id: {id}</p>
        </div>
    );
};

export default TrainerDetails;