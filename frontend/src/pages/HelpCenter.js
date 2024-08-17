import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const HelpCenter = () => {
  const [cardDetails, setCardDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCardDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}api/cards`);
      const data = await response.json();
      // http://localhost:8080/

      console.log(data);
      setCardDetails(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const searchFilteredData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}api/cards/${search}`
      );
      const data = await response.json();
      console.log(data);
      setCardDetails(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCardDetails();
  }, []);

  return (
    <div>
      <div className="h-96 bg-indigo-100">
        <NavBar />

        <div className="flex flex-col items-center justify-center gap-y-4 mt-20">
          <h1 className="text-4xl font-semibold text-center mt-4">
            How can we help ?
          </h1>
          <div className="bg-white p-2 flex rounded-sm shadow-md border border-black">
            <input
              className="outline-none w-60 sm:w-96"
              type="text"
              placeholder="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
            ></input>
            <ArrowRightIcon
              onClick={searchFilteredData}
              className="h-6 w-6 text-gray-800"
            />
          </div>
        </div>
      </div>
      <div>
        {cardDetails.length > 0 && !loading ? (
          <Card data={cardDetails} />
        ) : (
          (loading && (
            <div className="flex flex-col justify-center items-center h-96">
              <h1 className="text-2xl font-medium">Loading...</h1>
            </div>
          ),
          (
            <div className="flex flex-col justify-center items-center h-96">
              <h1 className="text-2xl font-medium">No Data Found !</h1>
              <p className="text-xs text-gray-600 italic">
                please try again later
              </p>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HelpCenter;
