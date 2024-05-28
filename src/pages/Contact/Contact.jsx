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
    <ContactInfoBox></ContactInfoBox>
    <Footer></Footer>
    </>
  )
}
