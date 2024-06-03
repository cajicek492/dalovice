import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import Article from "../../components/News/Article";
export default function ArticlePage4() {
  const articleData = {
    title: 'Připomínkování jízdních řádů',
    subtitle: '',
    paragraphs: [
      'Návrhy jízdních řádů PID platných od 1.12.2024 najdete na novém webu “AUTOBUSY 2024”- www.autobusy2024.idsk.cz.',
      'Připomínky můžete předložit do 20.4.2024 na OÚ Dalovice.',
      
    ],
    publishedDate: "17.04.2024 ",
    author: "Obecní úřad Dalovice",
    imageSrc: '',
    imageAlt: 'Sample image',
    backButtonLink: "/news",
    backButtonText: "zpět"
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
          backButtonLink={articleData.backButtonLink}
          backButtonText={articleData.backButtonText}
        />
        <br/>
    <Footer/>
    </>
  )
}
