import { useEffect, useState } from "react";
import Trainer from "./Trainer";
import Aos from "aos";

const Trainers = () => {
    // aos animation
        Aos.init({
            duration: 1500
        })
    

    const [trainer, setTrainer] = useState([]);
    useEffect(() => {
        fetch('/sponsors.json')
            .then(res => res.json())
            .then(data => setTrainer(data))
    }, [])

    return (
        <>
        
            <div className="mt-10">
                <h1 className="my-5 text-4xl font-semibold text-center">Our Honourable Sponsors</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {trainer?.map((element, index) => <Trainer 
                    key={element.id} 
                    trainer={element}
                    data-aos='zoom-in-up'
                    data-aos-delay={`${index}*100`}

                    >

                    </Trainer>)}
                </div>
            </div>
        </>
    );
};

export default Trainers;