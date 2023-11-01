import React, { useState } from 'react';
import GetUserCar from '../GetUserCar';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import ThreejsLamb from '../components/ThreejsLamb';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate=useNavigate();
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const clearInput=()=>{
    setInput('');
  }

  async function handleSearch() {
    const carFound = await GetUserCar(input);
    clearInput();
    if (carFound) {
      navigate('car');
    }
  }

  return (
    <div className="body">
      <div className="carSearchContainer">
        <div className="centered-content">
          <ThreejsLamb enableZoom={false}/> {/* Move the Lamborghini component here */}
          </div>
          <div className="underCar">
          <Input
            className="carInput"
            type="text"
            placeholder="Car Model"
            onChange={handleInputChange}
            value={input}
          />
          <Button
            className="carButton"
            icon={<SearchOutlined />}
            id="buttonGet"
            onClick={() => {handleSearch()}}
          >
            Retrieve Vehicle Model
          </Button>
          </div>
        
      </div>
    </div>
  );
}

export default Home;
