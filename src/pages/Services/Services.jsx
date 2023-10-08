import { useEffect, useState } from "react";
import Service from "./Service";
import Aos from "aos";

const Services = () => {
    // animation
        Aos.init({
            duration: 1000
        })
  
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <>
            <h1 className="mt-10 my-5 text-4xl font-semibold text-center">We are offering you very exciting Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* {service.length} */}
                {service.map((element, index) => <Service
                    key={element.id}
                    service={element}
                    data-aos="zoom-in-up"
                    data-aos-delay={`${index * 100}`}>

                </Service>)}
            </div>
        </>
    );
};

export default Services;