import React, { useEffect } from "react";
import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import Card from "../../components/News/Card";
import CardSpace from "../../components/News/CardSpace";

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
      link: "/news/article",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sample Card 2",
      description: "This is a sample description for the card component.",
      buttonText: "Click Me",
      link: "/news/article2",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sample Card 3",
      description: "This is a sample description for the card component.",
      buttonText: "Click Me",
      link: "/news/article3",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sample Card 4",
      description: "This is a sample description for the card component.",
      buttonText: "Click Me",
      link: "/news/article4",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sample Card 5",
      description: "This is a sample description for the card component.",
      buttonText: "Click Me",
      link: "/news/article5",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sample Card 6",
      description: "This is a sample description for the card component.",
      buttonText: "Click Me",
      link: "/news/article6",
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
              link={card.link}
            />
          </div>
        ))}
      </CardSpace>
      <br />
      <Footer />
    </>
  );
}
