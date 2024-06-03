import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import Article from "../../components/News/Article";
export default function ArticlePage5() {
  const articleData = {
    title: "Svoz nebezpečného odpadu",
    subtitle: "",
    paragraphs: [
      "V neděli 28.4.2024 v 8,00 hod. bude proveden SVOZ NEBEZPEČNÉHO ODPADU!!!",
      "Sběr se bude týkat pouze těchto složek nebezpečného odpadu: obaly (katalog.č. 150110) se zbytky nebezpečných látek, barvy (katalog.č. 200127) v uzavřených obalech, olej a tuk (katalog.č. 200126) - ne jedlé oleje a tuky autobaterie (katalog.č. 200133).",
      "Součástí svozu je zpětný odběr elektrozařízení, olejů motorových a převodových - v uzavřených nádobách, drobných baterií a monočlánků: ",
      "Výše jmenované složky nebezpečného odpadu, elektrozařízení a olejů můžete shromáždit v den svozu pouze za přítomnosti zástupce obecního úřadu v době od 7,30   do 7,50 hodin u zastávky MHD u Základní školy v Dalovicích.",
      "Odpady jako lepenka, azbest, asfalt a pneu nebudou odvezeny, proto je  na shromaždiště neodkládejte!  ",
      "Tato služba je určena pouze pro odvoz odpadu z domácnosti, v žádném případě se tato služba netýká odpadu ze živností.	",
    ],
    publishedDate: "08.04.2024 ",
    author: "Obecní úřad Dalovice",
    imageSrc: "",
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
