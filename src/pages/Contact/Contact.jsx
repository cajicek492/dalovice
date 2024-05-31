import Banner from "../../components/Ui/Banner"
import Footer from "../../components/Ui/Footer"
import ContactInfoBox from "../../components/Contact/ContactInfoBox"
import React, { useEffect } from 'react';


export default function Contact() {
  useEffect(() => {
    document.title = "Kontakt";
  }, []);
  return (
    <>
    <Banner></Banner>
    <ContactInfoBox
      heading="Kontaktní informace – Obecní úřad"
      mayor="Starosta: Eliška Hlaváčová"
      deputyMayor="Místostarostka: Věra Sehnalová"
      officeHours="Úřední hodiny: Pondělí: 16:00 – 17:30 hod."
      address="Adresa: Obecní úřad Dalovice Dalovice 94 293 01 Mladá Boleslav 1"
      manager="Eliška Wágnerová – hospodářka"
      phone="Telefon: +420 326 723 370"
      email="E-mail: urad@obecdalovice.cz"
      dataBoxId="Identifikátor datové schránky: d7jbx5m"
      ico="IČ: 00508896"
      imageSrc="https://obecdalovice.cz/wp-content/uploads/2022/08/dji-0454-scaled.jpg"
      imageAlt="School"
    />
    <Footer></Footer>
    </>
  )
}
