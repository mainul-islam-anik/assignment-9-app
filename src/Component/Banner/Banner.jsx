import React from 'react';

const Banner = () => {
    return (
         <div data-theme="winterpets" className="bg-base-100 text-white">
      {/* Hero Slider */}
      <section className="relative">
        <div className="carousel w-full h-[80vh]">

          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
              className="w-full object-cover"
              alt="Cat in cozy winter sweater"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-xl space-y-4">
                  <span className="badge badge-secondary">Winter Collection</span>
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Cozy Knits for Cool Cats
                  </h1>
                  <p className="text-lg text-slate-200">
                    Soft sweaters and scarves designed to keep your feline warm and stylish all winter long.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d"
              className="w-full object-cover"
              alt="Dog wearing winter jacket"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-xl space-y-4">
                  <span className="badge badge-accent">New Arrival</span>
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Puffer Jackets for Playful Pups
                  </h1>
                  <p className="text-lg text-slate-200">
                    Insulated, water‑resistant, and made for snowy walks and cuddly evenings.
                  </p>
                  <div className="flex gap-4">
                    <button className="btn btn-primary">Explore Jackets</button>
                    <button className="btn btn-outline text-white">Size Guide</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
              className="w-full object-cover"
              alt="Dog in festive winter outfit"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-xl space-y-4">
                  <span className="badge badge-primary">Limited Edition</span>
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Holiday Warmth, Tail‑Wag Approved
                  </h1>
                  <p className="text-lg text-slate-200">
                    Festive coats, beanies, and blankets made for memorable winter moments.
                  </p>
                  <div className="flex gap-4">
                    <button className="btn btn-secondary">Browse Gifts</button>
                    <button className="btn btn-outline text-white">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Banner;