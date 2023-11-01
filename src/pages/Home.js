import React, {useState} from 'react'
import GetUserCar from '../GetUserCar';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip,Input } from 'antd';
import './Home.css'
function Home() {
  const [input,setInput]=useState('');
  const handleInputChange=(e)=>{
    setInput(e.target.value)
  }

  return (
    <div className='body'>
       <div className='carSearchContainer'> 
        <Input  type="text" placeholder="Car Model" onChange={handleInputChange}/>
        <Button className="carButton" icon={<SearchOutlined />} id="buttonGet" onClick={()=>{GetUserCar(input)}}>Retrieve Vehicle Model</Button>
        </div>
    </div>
  )
}

export default Home