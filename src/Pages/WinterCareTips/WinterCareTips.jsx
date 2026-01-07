import React from 'react';


const winterTips = [
  {
    id: 1,
    title: "Keep Pets Warm",
    description: "Keep your pets warm during winter by using cozy clothes and protecting them from cold weather."
  },
  {
    id: 2,
    title: "Provide Nutritious Food",
    description: "Provide nutritious and calorie-rich food to help your pets stay healthy in cold weather."
  },
  {
    id: 3,
    title: "Avoid Cold Water",
    description: "Avoid bathing your pets with very cold water during winter to prevent illness."
  },
  {
    id: 4,
    title: "Regular Vet Check",
    description: "Schedule regular veterinary checkups during winter to prevent seasonal diseases."
  }
];

const WinterCareTips = () => {

    return (
        <section className="py-20 px-4 bg-[#D2D2D2]">
      <h2 className="text-3xl font-bold text-center mb-10">
        Winter Care Tips for Pets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {winterTips.map(tip => (
          <div
            key={tip.id}
            className="card bg-base-100 shadow-md border"
          >
            <div className="card-body">
              <h3 className="card-title">{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default WinterCareTips;