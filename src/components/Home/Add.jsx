import React from 'react';

export default function Add(props) {
  return (
    <div className="p-4 bg-gray-900 border border-gray-700 rounded-lg shadow-lg max-w-sm mx-auto">
      <img src={props.link} alt="Description of first image" className="w-full rounded-lg mb-4"/>
    </div>
  );
}
