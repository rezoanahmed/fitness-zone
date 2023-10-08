import { useEffect, useState } from "react";
import Sponsor from "./Sponsor";
import Aos from "aos";

const Sponsors = () => {
    // aos animation
        Aos.init({
            duration: 1000
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
                    {trainer?.map((element, index) => <Sponsor 
                    key={element.id} 
                    sponsor={element}
                    data-aos='zoom-in-up'
                    data-aos-delay={`${index}*100`}

                    >

                    </Sponsor>)}
                </div>
            </div>
        </>
    );
};

export default Sponsors;