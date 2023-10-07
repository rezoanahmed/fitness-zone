import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('/gym.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <>
        <h1 className="my-5 text-4xl font-semibold text-center">Our Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* {service.length} */}
            {service.map(element=><Service key={element.id} service={element}></Service>)}
        </div>
        </>
    );
};

export default Services;