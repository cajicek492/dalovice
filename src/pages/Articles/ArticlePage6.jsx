import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import Article from "../../components/News/Article";
export default function ArticlePage6() {
  const articleData = {
    title: "Informace spolku Pomáháme srnčatům",
    subtitle: "",
    paragraphs: [
      "Informace pro občany, kteří by se chtěli podílet na činnosti spolku Pomáháme srnčatům:",
      "SPOLEK POMÁHÁME SRNČATŮM",
      "Hřivno 67, 294 79 Chotětov",
      "e-mail: pomahamesrncatum@seznam.cz",
      "tel: 607 068 166, 724 806 327",
      "– Facebooková skupina: Vyhánění srnčat- senoseč. Mladoboleslavsko – na této stránce sdružujeme dobrovolníky a sdílíme aktuality. Ke skupině se může přidat každý.",
      "– Email: pomahamesrncatum@seznam.cz",
      "– Adresa: SPOLEK POMÁHÁME SRNČATŮM, Hřivno 67",
      "– Tel: Barbora Hájková 607 068 166, Lucie Novotná 724 806 327",
      "Více informací o občanských aktivitách také na: www.stopsecenisrncat.cz, Facebooková skupina: „Stop sečení srnčat“ Instagram: #stopsecenisrncat",
    ],
    publishedDate: "03.04.2024 ",
    author: "Obecní úřad Dalovice",
    imageSrc:
      "https://obecdalovice.cz/wp-content/uploads/2024/04/letak-a4-se-spadavkami-pro-tisk-mladeboleslavsko-292x400.jpg",
    imageAlt: "Sample image",
    backButtonLink: "/news",
    backButtonText: "zpět"
  };
  return (
    <>
      <Banner />
      <br />
      <Article
        title={articleData.title}
        subtitle={articleData.subtitle}
        publishedDate={articleData.publishedDate}
        author={articleData.author}
        paragraphs={articleData.paragraphs}
        imageSrc={articleData.imageSrc}
        imageAlt={articleData.imageAlt}
        backButtonLink={articleData.backButtonLink}
          backButtonText={articleData.backButtonText}
      />
      <br />
      <Footer />
    </>
  );
}
