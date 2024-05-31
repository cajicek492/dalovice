import Banner from "../../components/Ui/Banner";
import Footer from "../../components/Ui/Footer";
import AboutInfoBox from "../../components/About/AboutInfoBox";

export default function About() {
  return (
    <>
    <Banner/>
    <AboutInfoBox
    heading= "Informace o obci"
    heading2= "Obyvatelstvo:"
    kraj = "Kraj: Středočeský"
    okres = "Okres: Mladá Boleslav"
    obvod = "Správní obvod: Mladá Boleslav"
    GPS = "GPS souřadnice: 50.425688N, 14.879933E"
    nvm = "Nadmořská výška: 255 m n. m."
    first = "První pís. zmínka: rok 1398 (624 let)"
    catastral = "Katastrální výměra: 388 ha"
    imageSrc= "https://obecdalovice.cz/wp-content/uploads/2022/05/obyvatelstvo.png"
    />
    <Footer/>
    </>
  )
}
