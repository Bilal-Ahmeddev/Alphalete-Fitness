import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const JoinNow = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-4xl w-full bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-lg p-8 shadow-lg">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Join <span className="text-red-500">Alphalete Fitness</span> Today
        </h1>
        <p className="text-center text-gray-300 mb-6">
          Unlock exclusive workouts, nutrition plans, and premium fitness guidance.
        </p>

        {/* Membership Options */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-700 p-6 rounded-lg text-center shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-2">Basic Plan</h3>
            <p className="text-gray-300 mb-4">Access to limited workouts & fitness guides.</p>
            <span className="block text-xl font-bold mb-4">$9.99/month</span>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-all">
              Get Started
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-red-600 p-6 rounded-lg text-center shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2">Premium Plan</h3>
            <p className="text-white mb-4">Full access to all workouts, supplements & coaching.</p>
            <span className="block text-xl font-bold mb-4">$19.99/month</span>
            <button className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition-all">
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Signup Link */}
        <div className="text-center mt-6">
          <p className="text-gray-400">
            Already a member?{" "}
            <Link to="/login" className="text-red-400 hover:text-red-500">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
