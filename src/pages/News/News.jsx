import Banner from "../../components/Ui/Banner"
import Footer from "../../components/Ui/Footer"
import Card from "../../components/Ui/Card";

export default function News() {
  return (
    <>
    <Banner></Banner>
    <br></br>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex justify-center">
            <Card
              image="https://via.placeholder.com/150"
              title="Sample Card"
              description="This is a sample description for the card component."
              buttonText="Click Me"
            
            />
          </div>
          <div className="flex justify-center">
            <Card
              image="https://via.placeholder.com/150"
              title="Sample Card"
              description="This is a sample description for the card component."
              buttonText="Click Me"
             
            />
          </div>
          <div className="flex justify-center">
            <Card
              image="https://via.placeholder.com/150"
              title="Sample Card"
              description="This is a sample description for the card component."
              buttonText="Click Me"
              
            />
          </div>
          <div className="flex justify-center">
            <Card
              image="https://via.placeholder.com/150"
              title="Sample Card"
              description="This is a sample description for the card component."
              buttonText="Click Me"
             
            />
            
          </div>
          <div className="flex justify-center">
            <Card
              image="https://via.placeholder.com/150"
              title="Sample Card"
              description="This is a sample description for the card component."
              buttonText="Click Me"
             
            />
          </div>
          <div className="flex justify-center">
            <Card
              image="https://via.placeholder.com/150"
              title="Sample Card"
              description="This is a sample description for the card component."
              buttonText="Click Me"
             
            />
          </div>
        </section>
        <br></br>
    <Footer></Footer>
    </>
  )
}
