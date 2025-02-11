import React from 'react';
import { ChevronDown, Flame, Timer, Trophy } from 'lucide-react';
import { Link } from "react-router-dom";

const SplashScreen = () => {
  const features = [
    { icon: Flame, text: "Burn Fat", stat: "500+ Workouts" },
    { icon: Timer, text: "Save Time", stat: "20-40 Min Sessions" },
    { icon: Trophy, text: "Get Results", stat: "95% Success Rate" }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-red-900/30" />
      
      {/* Background Image Placeholder */}
      <img 
        src="/api/placeholder/1920/1080" 
        alt="Fitness Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-red-500">Transform</span> Your Body
            <br />
            <span className="text-red-500">Transform</span> Your Life
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Join the ultimate fitness journey. Professional workouts, nutrition plans, and expert guidance - all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
           to="/WorkoutSections"
  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
>
  Start Your Journey
</Link>
           <Link
  to="/learnmore"
  className="bg-transparent border-2 border-white hover:border-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:text-red-500"
>
  Learn More
</Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-red-500/20 hover:border-red-500 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.text}</h3>
                <p className="text-gray-400">{feature.stat}</p>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-red-500" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;