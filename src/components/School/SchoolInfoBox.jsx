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
  imageAlt,
}) => {
  return (
    <div className="bg-gray-900 text-gray-200 p-6 border border-gray-700 rounded-lg shadow-lg mt-8 mb-12 mx-4 md:mx-auto md:max-w-4xl">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold">{schoolName}</h2>
        <p>{organizationType}</p>
        <p>{address}</p>
        <p>{ico}</p>
        <p>{facilityId}</p>
        <p>{dataBoxId}</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold">{contactHeading}</h2>
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
      <div className="relative" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.230299238749!2d14.87605430989602!3d50.42634758250073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955d65ad465e9%3A0x5f585c451cffd70b!2zWsOha2xhZG7DrSDFoWtvbGE!5e0!3m2!1scs!2scz!4v1717172259514!5m2!1scs!2scz"
          title="Google Map"
          frameBorder="0"
          className="absolute inset-0 w-full h-full rounded-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default SchoolInfoBox;
