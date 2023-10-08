import { useEffect, useState } from "react";
import Plan from "./Plan";
import Aos from "aos";

const Plans = () => {
    // animation
    useEffect(()=>{
        Aos.init({
            duration: 1500
        })
    },[])
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        fetch("/gymSupplements.json")
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [])
    return (
        <>
        <div className="mt-20">
            <h1 className="my-5 text-4xl font-semibold text-center">Fuel your fitness journey with diet and supplements plans</h1>
            <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {plans.map((element, index) => <Plan
                 key={element.id}
                plan={element}
                data-aos="zoom-in-up"
                data-aos-delay={`${index}*100`}
                ></Plan>)}

            </div>
        </div>
        </>
    );
};

export default Plans;