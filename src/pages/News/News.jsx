import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import Card from "../../components/News/Card";
import CardSpace from "../../components/News/CardSpace";
import React, { useEffect } from "react";

export default function News() {
  useEffect(() => {
    document.title = "Zprávy";
  }, []);

  const cardData = [
    {
      image: "https://via.placeholder.com/150",
      title: "Sample Card 1",
      description: "This is a sample description for the card component.",
      buttonText: "Click Me",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sample Card",
      description: "This is a sample description for the card component.",
      buttonText: "Click Me",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sample Card 3",
      description: "This is a sample description for the card component.",
      buttonText: "Click Me",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sample Card",
      description: "This is a sample description for the card component.",
      buttonText: "Click Me",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sample Card",
      description: "This is a sample description for the card component.",
      buttonText: "Click Me",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sample Card",
      description: "This is a sample description for the card component.",
      buttonText: "Click Me",
    },
  ];

  return (
    <>
      <Banner />
      <br />
      <CardSpace>
        {cardData.map((card, index) => (
          <div key={index} className="flex justify-center">
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
            />
          </div>
        ))}
      </CardSpace>
      <br />
      <Footer />
    </>
  );
}
