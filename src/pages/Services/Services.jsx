import { useEffect, useState } from "react";
import Service from "./Service";
import { Helmet } from "react-helmet-async";

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('/gym.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <>
        <Helmet>
            <title>Gym Zone | Services</title>
        </Helmet>
        <h1 className="my-5 text-4xl font-semibold text-center">Our Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* {service.length} */}
            {service.map(element=><Service key={element.id} service={element}></Service>)}
        </div>
        </>
    );
};

export default Services;