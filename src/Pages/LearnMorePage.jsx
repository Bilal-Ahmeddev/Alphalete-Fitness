import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Play, Star, Users, Clock, Book, Dumbbell } from 'lucide-react';

const LearnMorePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const benefits = [
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Work with certified fitness professionals who create personalized plans for your goals."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Access workouts 24/7, train at your convenience with on-demand content."
    },
    {
      icon: Book,
      title: "Detailed Programs",
      description: "Follow structured workout plans designed for all fitness levels."
    },
    {
      icon: Dumbbell,
      title: "Equipment Options",
      description: "Programs for gym or home workouts with minimal equipment needed."
    }
  ];

  const faqs = [
    {
      question: "How long are the workout sessions?",
      answer: "Our workout sessions typically range from 20-45 minutes, designed to be both effective and time-efficient. We offer options for quick HIIT sessions and longer strength training workouts."
    },
    {
      question: "Do I need special equipment?",
      answer: "Many workouts can be done with minimal or no equipment. For those who have access to a gym or home equipment, we provide alternative versions of exercises."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Absolutely! Our programs cater to all fitness levels, from complete beginners to advanced athletes. Each exercise includes detailed instructions and modifications."
    },
    {
      question: "What support is available?",
      answer: "You'll have access to our community forum, weekly Q&A sessions with trainers, and detailed exercise tutorials. Our support team is also available via chat."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      image: "/api/placeholder/64/64",
      text: "Transformed my approach to fitness. Lost 30lbs in 6 months!",
      rating: 5
    },
    {
      name: "James K.",
      image: "/api/placeholder/64/64",
      text: "The program's flexibility fits perfectly with my busy schedule.",
      rating: 5
    },
    {
      name: "Emily R.",
      image: "/api/placeholder/64/64",
      text: "Expert guidance and amazing community support.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey to a <span className="text-red-500">Stronger</span> You
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how our comprehensive fitness program can help you achieve your health and fitness goals with expert guidance and support.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 mx-auto transition-all duration-300">
            <Play className="w-5 h-5" />
            Watch Program Preview
          </button>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-black rounded-lg border border-red-500/20 hover:border-red-500 transition-all duration-300">
                <benefit.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-red-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-800 rounded-lg">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-red-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-red-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-800">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of others who have transformed their lives with our program.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white hover:border-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:text-red-500">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMorePage;