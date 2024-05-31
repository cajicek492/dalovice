import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import Article from "../../components/News/Article";
export default function ArticlePage() {
  const articleData = {
    title: 'Sraz motoveteránů – Písková Lhota 15.6.2024',
    subtitle: '',
    paragraphs: [
      
    ],
    publishedDate: "25.05.2024 ",
    author: "Obecní úřad Dalovice",
    imageSrc: 'https://obecdalovice.cz/wp-content/uploads/2024/05/motosraz-2024-284x400.jpeg',
    imageAlt: 'Sample image',
  };
  return (
    <>
    <Banner/>
    <br/>
    <Article
          title={articleData.title}
          subtitle={articleData.subtitle}
          publishedDate={articleData.publishedDate}
          author = {articleData.author}
          paragraphs={articleData.paragraphs}
          imageSrc={articleData.imageSrc}
          imageAlt={articleData.imageAlt}
        />
        <br/>
    <Footer/>
    </>
  )
}
