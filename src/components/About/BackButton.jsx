import { useNavigate } from 'react-router-dom';

export default function BackButton(props) {
    const navigate = useNavigate();
    const handleClick = () => {
        if (props.link) {
          navigate(props.link); // Use navigate function to navigate to the specified link
        }
      }; 
  return (
    <>
    <button
            onClick={handleClick}
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            {props.buttonText}
          </button>
    </>
  )
}
