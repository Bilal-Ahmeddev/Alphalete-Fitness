import React from 'react';
import { useCart } from '../contexts/cartContext';
import { ShoppingCart, X } from 'lucide-react';

const CartPage = () => {
  const { cartItems, removeItemFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0); // Calculate total price

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">Your Cart</h2>
        
        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-gray-900/80 backdrop-blur-md p-6 rounded-lg shadow-lg flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-lg font-bold">{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-400">Your cart is empty!</p>
        )}

        {/* Total Price and Checkout */}
        {cartItems.length > 0 && (
          <div className="flex justify-between items-center mt-8">
            <div className="text-xl font-bold text-white">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-lg rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
