import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import "./Home.css";
import React, { useEffect } from "react";
import Add from "../../components/Home/Add";
import AddSpace from "../../components/Home/AddSpace";
import LandingBlock from "../../components/Home/LandingBlock";

export default function Home() {
  useEffect(() => {
    document.title = "Obec Dalovice";
  }, []);

  return (
    <>
      <Banner />

      <LandingBlock
        h2="Vítejte v obci Dalovice"
        p="Obec Dalovice je krásná vesnice nacházející se v srdci České republiky. Prozkoumejte náš web a dozvíte se více o naší komunitě a novinkách."
        buttonText="Informace o obci"
        link = "/about"
      />

      <AddSpace>
        <Add link="https://ovm.bezstavy.cz/v1/gAi1wtzxC9btQBpSIBAdjAG7oTcU2Q/b/250" />
        <Add link="https://obecdalovice.cz/wp-content/uploads/2023/12/mr-light-250x250-1.png" />
      </AddSpace>
      <br></br>
      <Footer />
    </>
  );
}
