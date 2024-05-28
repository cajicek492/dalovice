import React from "react";

const ContactInfoBox = () => {
  return (
    <div className="bg-gray-900 text-gray-200 p-6 border border-gray-700 rounded-lg shadow-lg mt-8 mb-12 mx-4 md:mx-auto md:max-w-4xl">
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold">
          Kontaktní informace – Obecní úřad
        </h2>
        <p>Starosta: Eliška Hlaváčová</p>
        <p>Místostarostka: Věra Sehnalová</p>
        <p>Úřední hodiny: Pondělí: 16:00 – 17:30 hod.</p>
        <p>Adresa: Obecní úřad Dalovice Dalovice 94 293 01 Mladá Boleslav 1</p>
        <p>Eliška Wágnerová – hospodářka</p>
      </div>
      <div className="text-center">
        <p>Telefon: +420 326 723 370</p>
        <p>E-mail: urad@obecdalovice.cz</p>
        <p>Identifikátor datové schránky: d7jbx5m</p>
        <p>IČ: 00508896</p>
      </div>
      <br></br>
      <img
        src="https://obecdalovice.cz/wp-content/uploads/2022/08/dji-0454-scaled.jpg"
        alt="School"
        className="w-full h-auto rounded-lg mb-4"
      />
    </div>
  );
};

export default ContactInfoBox;
