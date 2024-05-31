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
  imageAlt,
}) => {
  return (
    <div className="bg-gray-900 text-gray-200 p-6 border border-gray-700 rounded-lg shadow-lg mt-8 mb-12 mx-4 md:mx-auto md:max-w-4xl">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold">{heading}</h2>
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
      <div className="relative" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.606367543052!2d14.882314220485249!3d50.42243282071147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470955d125796835%3A0x21bf8eae7fba32ab!2zRGFsb3ZpY2UgLSBPYmVjbsOtIMO6xZlhZA!5e0!3m2!1scs!2scz!4v1717171134394!5m2!1scs!2scz"
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

export default ContactInfoBox;
