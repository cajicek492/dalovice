import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import Card from "../../components/News/Card";
import CardSpace from "../../components/News/CardSpace";
import React, { useEffect } from "react";

export default function News() {
  useEffect(() => {
    document.title = "Zprávy";
  }, []);
  return (
    <>
      <Banner></Banner>
      <br></br>
      <CardSpace>
        <div className="flex justify-center">
          <Card
            image="https://via.placeholder.com/150"
            title="Sample Card"
            description="This is a sample description for the card component."
            buttonText="Click Me"
          />
        </div>
        <div className="flex justify-center">
          <Card
            image="https://via.placeholder.com/150"
            title="Sample Card"
            description="This is a sample description for the card component."
            buttonText="Click Me"
          />
        </div>
        <div className="flex justify-center">
          <Card
            image="https://via.placeholder.com/150"
            title="Sample Card"
            description="This is a sample description for the card component."
            buttonText="Click Me"
          />
        </div>
        <div className="flex justify-center">
          <Card
            image="https://via.placeholder.com/150"
            title="Sample Card"
            description="This is a sample description for the card component."
            buttonText="Click Me"
          />
        </div>
        <div className="flex justify-center">
          <Card
            image="https://via.placeholder.com/150"
            title="Sample Card"
            description="This is a sample description for the card component."
            buttonText="Click Me"
          />
        </div>
        <div className="flex justify-center">
          <Card
            image="https://via.placeholder.com/150"
            title="Sample Card"
            description="This is a sample description for the card component."
            buttonText="Click Me"
          />
        </div>
      </CardSpace>
      <br></br>
      <Footer></Footer>
    </>
  );
}
