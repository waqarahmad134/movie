import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MovieSection from "../components/MovieSection";
import MovieSection1 from "../components/MovieSection1";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="w-full relative bg-black text-base text-white font-poppins">
        <Header />
        <Banner />
        <MovieSection />
        <MovieSection1 />
        <Footer />
      </div>
    </div>
  );
}
