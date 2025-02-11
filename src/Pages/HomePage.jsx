import React from 'react';
import fitness from '../assets/fitness.jpg'; // Make sure the path is correct
import BlurText from '../Components/BlurText'; // Ensure BlurText is correctly imported

function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/fitness.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
            POWER<span className="text-red-500">FIT</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mt-4">
            Achieve your best physique with expert guidance & premium supplements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/workouts"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              Start Training
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/videos"
              className="bg-transparent border-2 border-white hover:border-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition-all duration-300 hover:text-red-500"
            >
              Watch Videos
              <PlayCircle className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
  );
}

export default HomePage;
