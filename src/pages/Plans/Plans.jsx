import { useEffect, useState } from "react";
import Plan from "./Plan";
import { Helmet } from "react-helmet-async";


const Plans = () => {
    const [plans, setPlans] = useState([]);
    useEffect(() => {
        fetch("/gymSupplements.json")
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [])
    return (
        <>
        <Helmet>
            <title>Gym Zone | Supplements Plans</title>
        </Helmet>
        <div className="mt-20">
            <h1 className="my-5 text-4xl font-semibold text-center">Fuel your fitness journey with diet and supplements plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {plans.map(element => <Plan key={element.id} plan={element}></Plan>)}

            </div>
        </div>
        </>
    );
};

export default Plans;