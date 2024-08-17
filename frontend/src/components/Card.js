import React from "react";

const Card = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-8 lg:grid-cols-3 xl:grid-cols-4 place-items-center  m-8">
      {data.map((card, index) => (
        <div
          key={index}
          className="w-72 my-8 h-full bg-gray-100 border border-gray-300 rounded-lg"
        >
          <h2 className="border-b border-gray-300 font-semibold p-2">
            {card.title}
          </h2>
          <p className="px-4 pt-2 text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
