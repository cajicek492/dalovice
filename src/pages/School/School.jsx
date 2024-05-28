import Banner from "../../components/Ui/Banner"
import Footer from "../../components/Ui/Footer"
import SchoolInfoBox from "../../components/School/SchoolInfoBox"
import React, { useEffect } from 'react';


export default function School() {
  useEffect(() => {
    document.title = "Škola";
  }, []);
  return (
    <>
    <Banner></Banner>
    <SchoolInfoBox></SchoolInfoBox>
    <Footer></Footer>
    </>
  )
}
