import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Name from './components/Name'
import Price from './components/Price'
import Image from './components/Image'
import Description from './components/Description'
import product from './product'

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log(product)
  const { name, price, description, image } = product;

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Name name={name}/>
          <Price price={price}/>
          <Description description={description}/>
          <Image image={image}/>
          
        </Card.Body>
      </Card>
      <p>Hello {image || "there"}!</p>
      
    </>
  )
}

export default App
