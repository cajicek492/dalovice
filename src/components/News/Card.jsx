import React from 'react';

const Card = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 text-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-200 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={onButtonClick}
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
