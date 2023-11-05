import React, { useEffect, useState } from 'react';
import GetPicture from '../components/api/ImagineArt';

function CarDisplay() {
  const [image, setImage] = useState(null);
  const [userInput, setUserInput] = useState(localStorage.getItem("car_logistics"));

  useEffect(() => {
    async function fetchImage() {
      try {
        const image = await GetPicture(userInput);
        setImage(image);
      } catch (error) {
        console.error(error);
      }
    }
    fetchImage();
  }, [userInput]); // Pass userInput as a dependency here

  return (
    <div>
      {image ? (
        <img src={image} alt="Generated Car" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CarDisplay;