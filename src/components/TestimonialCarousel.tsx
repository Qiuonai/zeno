import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
  {
    name: "Dr. Sarah Ahmed",
    title: "Cardiologist",
    message:
      "Zeno has revolutionized my documentation workflow. It's fast, intuitive, and lets me focus on patient care instead of paperwork.",
  },
  {
    name: "Dr. James Roy",
    title: "General Practitioner",
    message:
      "I’ve tried many scribe tools, but nothing comes close to Zeno in accuracy and speed. It feels like a real assistant!",
  },
  {
    name: "Dr. Aisha Khan",
    title: "Pediatrician",
    message:
      "Zeno's AI understands medical language deeply. I can’t imagine running my clinic without it now.",
  },
  {
    name: "Dr. Ben Carter",
    title: "Orthopedic Surgeon",
    message:
      "The efficiency gained with Zeno is remarkable. My notes are complete and accurate, saving me valuable time daily.",
  },
  {
    name: "Dr. Emily Watson",
    title: "Dermatologist",
    message:
      "Implementing Zeno was seamless, and the impact on my practice has been overwhelmingly positive. Highly recommend!",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-indigo-50 to-teal-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            What Doctors Say About <span className="text-teal-600">Zeno</span>
          </h2>
          <p className="mt-3 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why medical professionals trust Zeno for their daily practice.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30} // Adjust this value carefully with scaling
          slidesPerView={'auto'} // Crucial for auto-sizing and custom scaling
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="pb-12 testimonial-swiper" // Add a class for custom CSS targeting
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center"> {/* Add flex for centering content within slide */}
              <div
                className="bg-white shadow-lg rounded-3xl p-8 h-full flex flex-col justify-between
                           border border-gray-100 transition-all duration-500 ease-in-out testimonial-card" // Added testimonial-card class
              >
                <div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                    “{testimonial.message}”
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-blue-600">
                    {testimonial.name}
                  </h3>
                  <p className="text-md text-gray-500 mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}






