

const Plan = ({plan}) => {
    const {title, image, price} = plan;
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-base-100 shadow-xl rounded-lg space-y-2 p-4">
                <img src={image} alt="" className="h-[250px] w-[450px]"/>
                <h1 className="font-medium text-xl">{title}</h1>
                <p>${price}/month</p>
                <button className='text-red-500'>See Full Details</button>
            </div>
        </div>
    );
};

export default Plan;