
import { Link } from 'react-router-dom';

const Trainer = ({trainer, ...props}) => {
    const {id, title, image} = trainer;
    return (
        <div {...props} className='flex flex-col items-center justify-center bg-base-100 shadow-xl rounded-md space-y-2 p-4 mt-10'>
            <img src={image} alt="" className='h-[200px] w-[200px] rounded-full'/>
            <p className='text-xl font-medium'>{title}</p>
            <Link to={`/trainers/${id}`} className='text-red-500'>See Full Details</Link>
            
        </div>
    );
};

export default Trainer;