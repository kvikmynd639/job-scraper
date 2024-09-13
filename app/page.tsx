"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize duration for the animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full h-screen">
        {/* Image with Softer Gradient Overlay */}
        <div className="absolute inset-0">
          <img src="/imgs/mercatino-cutie.webp" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
        </div>

        {/* 3 Transparent Divs at the Bottom */}
        <div className="absolute bottom-0 w-full" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto pb-24">
            <div className="flex flex-col items-center text-white space-y-2" data-aos="zoom-in">
              <h3 className="text-3xl font-semibold">Take a tour around</h3>
              <p className="text-sm mb-2">Explore the future of job platforms</p>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl border-[2px] border-transparent hover:border-indigo-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(75,0,130,0.8)]">
                Get Started
              </button>
            </div>
            <div className="flex flex-col items-center text-white space-y-2" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-3xl font-semibold">100% Customisable</h3>
              <p className="text-sm mb-2">Manage all your job-related information</p>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl border-[2px] border-transparent hover:border-indigo-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(75,0,130,0.8)]">
                View Profile
              </button>
            </div>
            <div className="flex flex-col items-center text-white space-y-2" data-aos="zoom-in" data-aos-delay="400">
              <h3 className="text-3xl font-semibold">Network</h3>
              <p className="text-sm mb-2">Stay connected with your network</p>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl border-[2px] border-transparent hover:border-indigo-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(75,0,130,0.8)]">
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Section with 4-Column Grid */}
      <section
        className="w-full bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950 py-12"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform" data-aos="fade-right">
            <h3 className="text-xl font-bold mb-4">All your jobs in one place</h3>
            <p>We spare you some neurons and organise your jobs</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4">We make you a resume</h3>
            <p>If you don't believe us then try it and see the best match you have for jobs based on your skills</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform" data-aos="fade-right" data-aos-delay="400">
            <h3 className="text-xl font-bold mb-4">Nobody can take your time away</h3>
            <p>We take care of your invested time so you don't feel stressed out while applying. Apply automatically option--</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg text-white shadow-lg transform hover:scale-105 transition-transform" data-aos="fade-right" data-aos-delay="600">
            <h3 className="text-xl font-bold mb-4">Having an issue?</h3>
            <p>Whatever your questions are, address this particular place</p>
          </div>
        </div>
      </section>
      
      {/* Flexbox Section */}
      <section className="w-full py-12 bg-gradient-to-r from-slate-950 via-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 gap-8" data-aos="fade-left">
          {/* Text Section on the Left */}
          <div className="md:w-1/2 text-white space-y-6" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold">Skyrocket your chances for getting a job</h2>
            <p className="text-lg">
              In today's competitive job market, standing out is more important than ever. 
              With our platform, you can highlight your unique skills and experiences in a way that captures the attention of top employers. 
              Our advanced tools and resources are designed to help you build a compelling profile, connect with industry professionals, 
              and navigate your career path with confidence.
            </p>
            <p className="text-lg">
              Whether you're just starting out or looking to make a career change, our platform is here to support you every step of the way. 
              Let us help you unlock new opportunities and take your career to the next level.
            </p>
          </div>

          {/* Image Section on the Right */}
          <div className="md:w-1/2 flex justify-center" data-aos="fade-up" data-aos-delay="400">
            <img src="/imgs/rocket-launch.png" alt="Rocket Launch" className="object-fit w-full h-full max-w-md" />
          </div>
        </div>
      </section>

    </main>
  );
}
