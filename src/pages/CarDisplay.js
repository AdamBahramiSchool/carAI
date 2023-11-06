import React, { useEffect, useState } from 'react';
import GetPicture from '../components/api/ImagineArt';
import './CarDisplay.css'
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';

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
  }, [localStorage.getItem("car_logistics")]); // Pass userInput as a dependency here

  const data=JSON.parse(localStorage.getItem('carBodyInfo'));

  return (
    <div className='page-container'>
    <Card className='card'>
      <Card.Img variant="top" src={image || 'Loading Image...'} alt="Generating Car" />
      <Card.Body>
        <Card.Title>Car Info: </Card.Title>
        <Card.Text>
          {`City MPG: ${data[0].city_mpg || "N/A"},
        Class: ${data[0].class || "N/A"},
        Combination MPG: ${data[0].combination_mpg || "N/A"},
        Cylinders: ${data[0].cylinders || "N/A"},
        Displacement: ${data[0].displacement || "N/A"},
        Drive: ${data[0].drive || "N/A"},
        Fuel Type: ${data[0].fuel_type || "N/A"},
        Highway MPG: ${data[0].highway_mpg || "N/A"},
        Make: ${data[0].make || "N/A"},
        Model: ${data[0].model || "N/A"},
        Transmission: ${data[0].transmission || "N/A"},
        Year: ${data[0].year || "N/A"}`}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);
    
}

export default CarDisplay;