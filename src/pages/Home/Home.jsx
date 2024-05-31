import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import "./Home.css"
import React, { useEffect } from 'react';
import Add from "../../components/Home/Add";


export default function Home() {

  useEffect(() => {
    document.title = "Obec Dalovice";
  }, []);
  return (
    <>
      <Banner></Banner>
   <main className="bg-gray-800 text-gray-200 p-6">
        <div className="container mx-auto text-center">
          <img src="https://obecdalovice.cz/wp-content/uploads/2022/08/dji-0466-scaled.jpg" alt="Obec Dalovice" className="mx-auto rounded-lg shadow-lg mb-6 w-2/3 md:w-1/2 lg:w-1.5/3" />
          <h2 className="text-3xl font-semibold mb-4">Vítejte v obci Dalovice</h2>
          <p className="mb-6">
          Obec Dalovice je krásná vesnice nacházející se v srdci České republiky. Prozkoumejte náš web a dozvíte se více o naší komunitě, službách a novinkách.
          </p>
        </div>
      </main>
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
     <Add link = "https://ovm.bezstavy.cz/v1/gAi1wtzxC9btQBpSIBAdjAG7oTcU2Q/b/250"></Add>
     <Add link = "https://obecdalovice.cz/wp-content/uploads/2023/12/mr-light-250x250-1.png"></Add>
    </div>
    <br></br>
      <Footer></Footer>
    </>
  );

 
}