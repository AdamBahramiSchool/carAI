import React, { useEffect, useState } from 'react';
import getPicture from '../components/api/imagineArt';

function CarDisplay() {
  const [imageURL, setImageURL] = useState(null);

  async function fetchImage() {
    try {
      const imageResponse = await getPicture();
      const imageBlob = await imageResponse.blob();
      const url = URL.createObjectURL(imageBlob);
      setImageURL(url);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  // Fetch a new image when the component mounts
  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      {imageURL ? (
        <div>
          <img src={imageURL} alt="Generated Image" />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default CarDisplay;
