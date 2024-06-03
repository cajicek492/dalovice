import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import SchoolInfoBox from "../../components/School/SchoolInfoBox";
import React, { useEffect } from "react";

export default function School() {
  useEffect(() => {
    document.title = "Obec Dalovice - Škola";
  }, []);
  return (
    <>
      <Banner></Banner>
      <SchoolInfoBox
        schoolName="Základní škola a Mateřská škola Dalovice"
        organizationType="příspěvková organizace"
        address="Dalovice 32, 29301 Mladá Boleslav"
        ico="IČO: 62451421"
        facilityId="Identifikátor zařízení: 102326606"
        dataBoxId="Datová schránka: hcriavr"
        contactHeading="Kontakt"
        principal="Ředitelka školy: Mgr. Bc. Jitka Konečná"
        economicDeputy="Ekonomický zástupce ředitele: Eva Mňuková"
        phone="Tel.: 326 331 329 (Škola), 723 478 736 (Školní družina), 326 325 196 (Školní jídelna)"
        email="E-mail: info@zsdalovice.cz"
        imageSrc="https://obecdalovice.cz/wp-content/uploads/2022/10/900x600-141564-188-skola.jpg"
        imageAlt="School"
      />
      <Footer></Footer>
    </>
  );
}
