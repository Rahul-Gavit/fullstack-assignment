import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="h-full">
      <NavBar />
      <div className="flex flex-col items-center justify-center mt-12 gap-y-4 h-screen">
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
        <div className="flex justify-center">
          <div className="flex bg-gray-50 border hover:bg-gray-100 gap-x-2 px-4 py-2 rounded-md">
            <Link to="/help">Help Center</Link>
            <ArrowRightIcon className="h-6 w-6 text-gray-800" />
          </div>
        </div>
      </div>
      <div className="h-full">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
