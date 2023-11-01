import React, { useState } from 'react';
import GetUserCar from '../GetUserCar';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import ThreejsLamb from '../components/ThreejsLamb';
import './Home.css';

function Home() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="body">
      <div className="carSearchContainer">
        <div className="centered-content">
          <ThreejsLamb /> {/* Move the Lamborghini component here */}
          </div>
          <div className="underCar">
          <Input
            className="carInput"
            type="text"
            placeholder="Car Model"
            onChange={handleInputChange}
          />
          <Button
            className="carButton"
            icon={<SearchOutlined />}
            id="buttonGet"
            onClick={() => {
              GetUserCar(input);
            }}
          >
            Retrieve Vehicle Model
          </Button>
          </div>
        
      </div>
    </div>
  );
}

export default Home;
