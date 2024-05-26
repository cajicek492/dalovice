import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";

import React, { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    document.title = "Obec Dalovice";
  }, []);
  return (
    <>
      <Banner></Banner>
     
      <Footer></Footer>
    </>
  );

 
}
