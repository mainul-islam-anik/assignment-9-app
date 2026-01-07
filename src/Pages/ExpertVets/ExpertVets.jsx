import React from 'react';

const vets = [
  {
    id: 1,
    name: "Dr. Rahman",
    specialty: "Veterinary Surgeon",
    experience: "8+ Years Experience",
    image: "https://i.ibb.co.com/Y42tqCsb/download-13.jpg"
  },
  {
    id: 2,
    name: "Dr. Sultana",
    specialty: "Animal Nutritionist",
    experience: "6+ Years Experience",
    image: "https://i.ibb.co.com/XZtjN5sX/download-14.jpg"
  },
  {
    id: 3,
    name: "Dr. Hasan",
    specialty: "Pet Physician",
    experience: "7+ Years Experience",
    image: "https://i.ibb.co.com/4RHNhKNP/download-15.jpg"
  },
  {
    id: 4,
    name: "Dr. Nabila",
    specialty: "Pet Dermatologist",
    experience: "5+ Years Experience",
    image: "https://i.ibb.co.com/LXVT8YDH/download-16.jpg"
  }
];
const ExpertVets = () => {
    return (
         <div className="pb-20 px-4 bg-[#D2D2D2] ">
      <h2 className="text-3xl font-bold text-center mb-10">
        Meet Our Expert Vets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {vets.map(vet => (
          <div
            key={vet.id}
            className="card bg-base-100 shadow-lg"
          >
            <figure>
              <img
                src={vet.image}
                alt=""
                className="h-60 w-full object-cover"
              />
            </figure>

            <div className="card-body text-center">
              <h3 className="text-xl font-bold">{vet.name}</h3>
              <p className="text-sm text-gray-500">{vet.specialty}</p>
              <p className="text-sm font-semibold">{vet.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default ExpertVets;