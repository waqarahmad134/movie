import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MovieSection from "../components/MovieSection";
import MovieSection1 from "../components/MovieSection1";
import Footer from "../components/Footer";
import MovieSection2 from "../components/MovieSection2";

export default function Home() {
  return (
    <>
      <div className="w-full relative h-full text-base text-white bg-black font-poppins">
        <Header />
        <Banner />
        <MovieSection />
        <MovieSection1 section="Trending" />
        <MovieSection2 section="New Release - Movies" />
        {/* <Footer /> */}
      </div>
    </>
  );
}
