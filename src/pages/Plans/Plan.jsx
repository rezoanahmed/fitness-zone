import { Link } from "react-router-dom";


const Plan = ({plan, ...props}) => {
    const {id,title, image, price} = plan;
    return (
        <div {...props}>
            <div className="flex flex-col items-center justify-center bg-base-100 shadow-xl rounded-md space-y-2 p-4">
                <img src={image} alt="" className="h-[250px] w-[450px] rounded-md"/>
                <h1 className="font-medium text-xl">{title}</h1>
                <p>${price}/month</p>
                <Link to={`/plans/${id}`} className='text-red-500'>See Full Details</Link>
                
            </div>
        </div>
    );
};

export default Plan;