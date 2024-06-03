import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import Article from "../../components/News/Article";
export default function ArticlePage2() {
  const articleData = {
    title: 'Kolo pro život 11.5.2024',
    subtitle: '',
    paragraphs: [
      'V sobotu 11.5.2024 se uskuteční cyklistické závody KOLO PRO ŽIVOT.',
      'Trasa závodu prochází i přes naší obec. Motoristé, dbejte proto pokynů pořadatelů závodu'
    ],
    publishedDate: "07.05.2024 ",
    author: "Obecní úřad Dalovice",
    imageSrc: 'https://www.kolopro.cz/assets/images/fb-sharing2.png',
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
