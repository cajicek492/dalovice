import React from 'react';


const SchoolInfoBox = () => {
  return (
    <div className="bg-gray-900 text-gray-200 p-6 border border-gray-700 rounded-lg shadow-lg mt-8 mb-12 mx-4 md:mx-auto md:max-w-4xl">
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold">Základní škola a Mateřská škola Dalovice</h2>
        <p>příspěvková organizace</p>
        <p>Dalovice 32, 29301 Mladá Boleslav</p>
        <p>IČO: 62451421</p>
        <p>Identifikátor zařízení: 102326606</p>
        <p>Datová schránka: hcriavr</p>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold">Kontakt</h2>
        <p>Ředitelka školy: Mgr. Bc. Jitka Konečná</p>
        <p>Ekonomický zástupce ředitele: Eva Mňuková</p>
        <p>Tel.: 326 331 329 (Škola), 723 478 736 (Školní družina), 326 325 196 (Školní jídelna)</p>
        <p>E-mail: info@zsdalovice.cz</p>
      </div>
      <img src="https://obecdalovice.cz/wp-content/uploads/2022/10/900x600-141564-188-skola.jpg" alt="School" className="w-full h-auto rounded-lg mb-4" />
    </div>
  );
};

export default SchoolInfoBox;
