import React from "react";

const ContactInfoBox = ({
  heading,
  mayor,
  deputyMayor,
  officeHours,
  address,
  manager,
  phone,
  email,
  dataBoxId,
  ico,
  imageSrc,
  imageAlt
}) => {
  return (
    <div className="bg-gray-900 text-gray-200 p-6 border border-gray-700 rounded-lg shadow-lg mt-8 mb-12 mx-4 md:mx-auto md:max-w-4xl">
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold">{heading}</h2>
        <p>{mayor}</p>
        <p>{deputyMayor}</p>
        <p>{officeHours}</p>
        <p>{address}</p>
        <p>{manager}</p>
      </div>
      <div className="text-center">
        <p>{phone}</p>
        <p>{email}</p>
        <p>{dataBoxId}</p>
        <p>{ico}</p>
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

export default ContactInfoBox;
