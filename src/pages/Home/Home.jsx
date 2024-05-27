import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import "./Home.css"
import React, { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    document.title = "Obec Dalovice";
  }, []);
  return (
    <>
      <Banner></Banner>
      <section className="p-2 grid gap-4 ">
   <div className="rounded-img-container flex justify-center">
    <img
     src="https://obecdalovice.cz/wp-content/uploads/2022/08/dji-0466-scaled.jpg" 
     alt=""
     />
   </div>
   </section>
      <Footer></Footer>
    </>
  );

 
}