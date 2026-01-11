import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Details = () => {
    const {id} = useParams()
    const appId = parseInt(id)
    const data = useLoaderData()
    const singleData = data.find(app => app.serviceId === appId)
    const {serviceName,serviceId, price,rating, image} = singleData;
    console.log(singleData)
    return (
        <div>
            <h1>deoujasnvjk</h1>
        </div>
    );
};

export default Details;