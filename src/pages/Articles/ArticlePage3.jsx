import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import Article from "../../components/News/Article";
export default function ArticlePage3() {
  const articleData = {
    title: 'Sample Article Title',
    subtitle: 'This is the subtitle of the article',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.',
      'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    ],
    imageSrc: '',
    imageAlt: 'Sample image',
  };
  return (
    <>
    <Banner/>
    <br/>
    <Article
          title={articleData.title}
          subtitle={articleData.subtitle}
          paragraphs={articleData.paragraphs}
          imageSrc={articleData.imageSrc}
          imageAlt={articleData.imageAlt}
        />
        <br/>
    <Footer/>
    </>
  )
}
