import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Card = ({cardData}) => {
    const {serviceName,serviceId, price,rating, image} = cardData;
    return (
            <div className="card bg-base-100 w-[390px] h-[450px] shadow-sm">
  <figure className='p-5'>
    <img className='h-[300px] w-[300px] p-6 rounded-4xl'
      src={image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {serviceName}
    </h2>
    <div className="card-actions justify-between"> 
      <div className="badge p-4 bg-gray-200 font-bold text-xl ">{price}</div>
      <div className="badge bg-[#FFF0E1] font-semibold text-[#FF8811]"><Star className='h-[15px] w-[15px]'></Star>{rating}</div>
    </div>
    
    <Link to={`/details/${serviceId}`}>
    <button className='btn w-full bg-blue-400 text-bold text-white'>View Details</button>
    </Link>
  </div>
        </div>
    );
};

export default Card;