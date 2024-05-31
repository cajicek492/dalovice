import React from 'react'

export default function LandingBlock(props) {
  return (
    <>
      <main className="bg-gray-800 text-gray-200 p-6 flex flex-col md:flex-row items-center justify-center">
        <div className="container mx-auto text-center md:w-1/2 md:mr-6">
          <img
            src="https://obecdalovice.cz/wp-content/uploads/2022/08/dji-0466-scaled.jpg"
            alt="Obec Dalovice"
            className="mx-auto rounded-lg shadow-lg mb-6 w-2/3 md:w-full"
          />
        </div>
        <div className="container mx-auto text-center md:w-1/2 md:ml-6">
          <h2 className="text-3xl font-semibold mb-4">{props.h2}</h2>
          <p className="mb-6">
            {props.p}
          </p>
        </div>
      </main>
    </>
  )
}
