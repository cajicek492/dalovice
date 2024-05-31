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
      image: "https://obecdalovice.cz/wp-content/uploads/2024/05/motosraz-2024-284x400.jpeg",
      title: "Sraz motoveteránů – Písková Lhota 15.6.2024",
      description: "Nenechte si tuhle událost utéct",
      buttonText: "Číst dále",
      link: "/news/article",
    },
    {
      image: "https://www.kolopro.cz/media/cache/article_huge_thumbnail/uploads/old/icon-2649.png",
      title: "Kolo pro život 11.5.2024",
      description: "V sobotu 11.5.2024 se uskuteční cyklistické závody KOLO PRO ŽIVOT",
      buttonText: "Číst dále",
      link: "/news/article2",
    },
    {
      image: "https://www.mubela.cz/wp-content/uploads/2023/05/ohen_zakaz.png",
      title: "Zákaz pálení ve Středočeském kraji",
      description: "Porušení povinností stanovených tímto nařízením lze postihnout jako přestupek",
      buttonText: "Číst dále",
      link: "/news/article3",
    },
    {
      image: "https://zlin.rozhlas.cz/sites/default/files/images/90ac3c4f3bd627eb9878a8c96a94b074.jpg",
      title: "Připomínkování jízdních řádů",
      description: "Informace o nových jízdních řádech platných od 1.12.2024",
      buttonText: "Číst dále",
      link: "/news/article4",
    },
    {
      image: "https://www.happyend.cz/CMSPages/GetFile.aspx?guid=1f6a051e-bb27-4090-80e2-ff461d5e72ad",
      title: "Svoz nebezpečného odpadu",
      description: "V neděli 28.4.2024 v 8,00 hod. bude proveden SVOZ NEBEZPEČNÉHO ODPADU!!!",
      buttonText: "Číst dále",
      link: "/news/article5",
    },
    {
      image: "https://stopsecenisrncat.cz/wp-content/uploads/2018/08/CF_srny_01.jpg",
      title: "Informace spolku Pomáháme srnčatům",
      description: "Informace pro občany",
      buttonText: "Číst dále",
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
