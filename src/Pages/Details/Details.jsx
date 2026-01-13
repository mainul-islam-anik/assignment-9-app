import React from 'react';
import { Navigate, useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

const Details = () => {

    const {id} = useParams()
    const appId = parseInt(id)
    const data = useLoaderData()
    const singleData = data.find(app => app.serviceId === appId)
    const {serviceId,serviceName,providerName,providerEmail, price,rating,slotsAvailable,description, image,category} = singleData;
    const handleBook =(e)=>{
        e.preventDefault();
        toast("Service Booked Successfully!")
    }
    return (
            <div>   
            <div className='my-6 flex justify-center'>
                <div>
                    <h2 className='font-extrabold text-2xl'>Service Details :{serviceId}</h2>
                    <hr />
                    <p className=''><span className='text-xl font-semibold'>Service Name :</span> {serviceName}</p>
                    <p className=''><span className='text-xl font-semibold'>Provider Name :</span> {providerName}</p>
                    <p><span className='text-xl font-semibold'>Provider Email :</span> {providerEmail}</p>
                    <p><span className='text-xl font-semibold'>Price :</span> {price}</p>
                    <p><span className='text-xl font-semibold'>Rating :</span> {rating}</p>
                    <p><span className='text-xl font-semibold'>Slots Available :</span> {slotsAvailable}</p>
                    <p><span className='text-xl font-semibold'>Description :</span> {description}</p>
                    <img src={image} alt="" />
                    <p><span className='text-xl font-semibold'>Category :</span> {category}</p>
                </div>
            </div>
            <form onSubmit={handleBook} className="card-body max-w-[350px] mx-auto">
                <fieldset className="fieldset "> 
                <h3 className='font-extrabold text-2xl'>Book Service</h3>
                {/* name */}
                <label className="label font-bold">Name:</label>
          <input name='name' type="text" className="input" placeholder="Name" required />
          {/* email */}
          <label className="label font-bold">Email:</label>
          <input 
          name='email'
          type="email" className="input"
          placeholder="Email" required/>
          <button type='submit' className="btn btn-neutral mt-4">Book Now</button>
        </fieldset>
            </form>
        </div>
    );
};

export default Details;