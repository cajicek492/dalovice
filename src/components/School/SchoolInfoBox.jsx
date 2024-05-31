import React from "react";

const SchoolInfoBox = ({
  schoolName,
  organizationType,
  address,
  ico,
  facilityId,
  dataBoxId,
  contactHeading,
  principal,
  economicDeputy,
  phone,
  email,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className="bg-gray-900 text-gray-200 p-6 border border-gray-700 rounded-lg shadow-lg mt-8 mb-12 mx-4 md:mx-auto md:max-w-4xl">
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold">{schoolName}</h2>
        <p>{organizationType}</p>
        <p>{address}</p>
        <p>{ico}</p>
        <p>{facilityId}</p>
        <p>{dataBoxId}</p>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold">{contactHeading}</h2>
        <p>{principal}</p>
        <p>{economicDeputy}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <br />
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-auto rounded-lg mb-4"
      />
    </div>
  );
};

export default SchoolInfoBox;
