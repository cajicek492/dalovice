import React from "react";

export default function AddSpace(props) {
  return (
    <>
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {props.children}
      </div>
    </>
  );
}
