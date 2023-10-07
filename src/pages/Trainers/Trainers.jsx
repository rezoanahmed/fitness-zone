import { useEffect, useState } from "react";
import Trainer from "./Trainer";


const Trainers = () => {

    const [trainer, setTrainer] = useState([]);
    useEffect(() => {
        fetch('/personalTrainer.json')
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])

    return (
        <>
        
            <div className="mt-10">
                <h1 className="my-5 text-4xl font-semibold text-center">Our Dedicated Trainers</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {trainer?.map(element => <Trainer key={element.id} trainer={element}></Trainer>)}
                </div>
            </div>
        </>
    );
};

export default Trainers;