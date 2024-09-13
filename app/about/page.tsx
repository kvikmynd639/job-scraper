"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for the animations
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <div className="w-full relative bg-slate-50 text-blue-900">
      {/* Header Section */}
      <section className="min-h-screen flex flex-col justify-center items-center space-y-4 px-8 bg-white">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-8xl font-bold uppercase tracking-wider text-center text-purple-600"
        >
          About <span className="text-blue-900">Mercatinuum</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-md md:text-2xl text-center max-w-4xl text-blue-800"
        >
          Welcome to the future of job platforms. Mercatinuum is designed to revolutionize the way businesses and freelancers connect, ensuring fairness, transparency, and efficiency in the job market.
        </p>
      </section>

      {/* Our Aim Section */}
      <section
        data-aos="fade-up"
        className="min-h-screen flex flex-col justify-center items-center bg-slate-100 px-8 py-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-purple-600">Our Aim</h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-2xl max-w-4xl mt-6 text-center text-blue-700"
        >
          At Mercatinuum, our aim is to create a continuous and inclusive job market where there are no gaps between job seekers and employers. We provide a comprehensive platform that leverages technology to help people find opportunities effortlessly and businesses to hire effectively.
        </p>
      </section>

      {/* Our Goal Section */}
      <section
        data-aos="fade-up"
        className="min-h-screen flex flex-col justify-center items-center bg-white px-8 py-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-purple-600">Our Goal</h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-2xl max-w-4xl mt-6 text-center text-blue-700"
        >
          Our goal is to be the go-to platform for both freelancers and companies seeking top talent. With AI-powered resume builders, task-specific job exercises, and real-time job scraping, we aim to empower both job seekers and businesses to achieve their goals efficiently.
        </p>
      </section>

      {/* Our Technology Section */}
      <section
        data-aos="fade-up"
        className="min-h-screen flex flex-col justify-center items-center bg-slate-50 px-8 py-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-purple-600">Our Technology</h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-2xl max-w-4xl mt-6 text-center text-blue-700"
        >
          Built with cutting-edge technologies like AI, our platform scrapes job listings from multiple platforms and automates the resume-building process.
        </p>
      </section>

      {/* Call to Action Section */}
      <section
        data-aos="zoom-in"
        className="min-h-screen flex flex-col justify-center items-center bg-slate-100 px-8 py-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-purple-600">Join Us in Shaping the Future</h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-2xl max-w-4xl mt-6 text-center text-blue-700"
        >
          Whether you're a freelancer looking for your next gig or a business searching for top talent, Mercatinuum is the platform that bridges the gap. Sign up today and be a part of the future of the job market.
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-8 px-10 py-4 bg-purple-600 text-white text-2xl rounded-tl-2xl rounded-br-2xl border-[2px] border-transparent hover:border-blue-600 hover:scale-110 transition-transform duration-300"
        >
          Get Started
        </button>
      </section>
    </div>
  );
}
