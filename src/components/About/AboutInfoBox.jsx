import BackButton from "../../components/About/BackButton";

const AboutInfoBox = ({
  heading,
  heading2,
  kraj,
  okres,
  obvod,
  GPS,
  nvm,
  first,
  catastral,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="bg-gray-900 text-gray-200 p-6 border border-gray-700 rounded-lg shadow-lg mt-8 mb-12 mx-4 md:mx-auto md:max-w-4xl">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <p>{kraj}</p>
        <p>{okres}</p>
        <p>{obvod}</p>
        <p>{GPS}</p>
        <p>{nvm}</p>
        <p>{first}</p>
        <p>{catastral}</p>
        <h2 className="text-2xl font-semibold">{heading2}</h2>
      </div>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-auto rounded-lg mb-4"
      />
       <div className="text-center"><BackButton link = "/" buttonText = "zpět"/></div>
    </div>
  );
};

export default AboutInfoBox;
