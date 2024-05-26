import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Starostka</h2>
          <p>Eliška Hlaváčová</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Adresa Obecního úřadu</h2>
          <p>Dalovice 94 293 01 MB</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Kontakt</h2>
          <p>Telefon: +420 326 723 370</p>
          <p>E-mail: urad@obecdalovice.cz</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">Oficiální internetové stránky obce Dalovice | vytvořily: Filip Hubler a Filip Mašek</p>
      </div>
    </footer>
  );
}
