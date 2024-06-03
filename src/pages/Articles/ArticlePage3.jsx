import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import Article from "../../components/News/Article";
export default function ArticlePage3() {
  const articleData = {
    title: 'Zákaz pálení ve Středočeském kraji',
    subtitle: '',
    paragraphs: [
      'Český hydrometeorologický ústav vydal dne 29. 4. 2024 výstrahu č. 000151 před nebezpečím vzniku požárů na území Středočeského kraje, platnou od 30. 4. 2024 0:00 hodin do 1. 5. 2024 24:00 hodin. ',
      'V souvislosti s ustanovením Čl. 1 odst. a) Nařízení Středočeského kraje č. 3/2020 ze dne 20. 4. 2020 o stanovení podmínek k zabezpečení požární ochrany v době zvýšeného nebezpečí vzniku požáru (dále jen "Nařízení") vstupují v účinnost stanovená opatření a zákazy vyplývající z Nařízení.',
      'V souladu s Nařízením je proto celoplošně',
    ],
    publishedDate: "29.04.2024 ",
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
