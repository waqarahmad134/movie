import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MovieSection from "../components/MovieSection";
import MovieSection1 from "../components/MovieSection1";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-full relative h-full text-base text-white font-poppins">
        <Header />
        <Banner />
        <div className="bg-black">
          <MovieSection />
          {/* <MovieSection1 />
          <Footer /> */}
        </div>
      </div>
    </>
  );
}
