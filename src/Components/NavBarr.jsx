import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell, Store, Users, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { CartContext } from "../contexts/cartContext"; // Import the CartContext
import BlurText from "./BlurText"; // Ensure correct import

const NavBarr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext); // Use the CartContext to access the cart state

  const navItems = [
    { name: "Workouts", icon: Dumbbell, link: "/WorkoutSections", isRoute: true },
    { name: "Supplements", icon: Store, link: "/supplements", isRoute: true }, // Internal section
  ];

  // Calculate total items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gray-800/40 backdrop-blur-lg border border-white/10 shadow-md shadow-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-14 sm:h-16">
          
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-red-500" />
            <Link to="/">
              <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-white">
                <BlurText
                  text="ALPHALETE FITNESS"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="text-base sm:text-lg md:text-xl text-white font-bold text-center"
                />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 sm:space-x-8 md:space-x-10">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.link}
                  className="flex flex-col items-center justify-center text-gray-300 hover:text-red-500 transition duration-300"
                >
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.div>
                  <span className="text-xs sm:text-sm md:text-base font-medium mt-1">{item.name}</span>
                </Link>
              ) : (
                <ScrollLink
                  key={item.name}
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="flex flex-col items-center justify-center text-gray-300 hover:text-red-500 transition duration-300 cursor-pointer"
                >
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </motion.div>
                  <span className="text-xs sm:text-sm md:text-base font-medium mt-1">{item.name}</span>
                </ScrollLink>
              )
            )}

            {/* Cart Icon */}
            <Link to="/cart" className="relative flex items-center text-gray-300 hover:text-red-500 transition duration-300">
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Join Now Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base md:text-lg transition duration-300 shadow-md">
              <Link to="/JoinNow">Join Now</Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 p-2">
            {isOpen ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <Menu className="h-6 w-6 sm:h-7 sm:w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="md:hidden absolute top-14 sm:top-16 left-0 w-full bg-gray-800/40 backdrop-blur-lg border border-white/10 shadow-md shadow-gray-900/50"
          >
            <div className="px-4 pt-3 pb-5 space-y-3">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:bg-red-500 hover:text-white px-3 sm:px-4 py-2 sm:py-3 rounded-md transition duration-300"
                  >
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="text-sm sm:text-base font-medium">{item.name}</span>
                  </Link>
                ) : (
                  <ScrollLink
                    key={item.name}
                    to={item.link}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:bg-red-500 hover:text-white px-3 sm:px-4 py-2 sm:py-3 rounded-md transition duration-300 cursor-pointer"
                  >
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="text-sm sm:text-base font-medium">{item.name}</span>
                  </ScrollLink>
                )
              )}

              {/* Cart Icon in Mobile */}
              <Link
                to="/cart"
                className="relative flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:bg-red-500 hover:text-white px-3 sm:px-4 py-2 sm:py-3 rounded-md transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="text-sm sm:text-base font-medium">Cart</span>
              </Link>

              {/* Join Now Button */}
              <button
                className="w-full bg-red-500 hover:bg-red-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition duration-300 flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                <span>Join Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBarr;
