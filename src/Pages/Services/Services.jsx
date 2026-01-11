import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Card';

const AllApps = () => {
    const data = useLoaderData()
    
    return (
        <div className='bg-[#D2D2D2]'>
            <h1 className='font-bold text-5xl text-center pt-20'>Popular Winter Care Services</h1>
            <p className='text-[#627382] text-center mt-4 pb-10'>Explore All Services on the Site developed by us. We code for Millions</p>
               <Suspense fallback={<span>Loading....</span>}>
                 <div className='pl-15 md:pl-15 lg:pl-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto gap-4 pb-10'>
                    {
                    data.map(cardData => <Card key={cardData.serviceId} cardData={cardData}></Card>)
                }
                </div>
               </Suspense>
        </div>
    );
};

export default AllApps;