
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Sponsor = ({sponsor, ...props}) => {
    const {id, title, image} = sponsor;
    return (
        <div {...props} className='flex flex-col items-center justify-center bg-base-100 shadow-xl rounded-md space-y-2 p-4 mt-10'>
            <img src={image} alt="" className='h-[200px] w-[200px] rounded-full'/>
            <p className='text-xl font-medium'>{title}</p>
            <Link to={`/sponsors/${id}`} className='text-red-500'>See Full Details</Link>
            
        </div>
    );
};

Sponsor.propTypes={
    sponsor: PropTypes.object.isRequired
}
export default Sponsor;