import React from 'react';
import { Carousel } from 'react-carousel3';
import Image1 from './assests/image_1.jpg';
import Image2 from './assests/image_2.jpg';
import Image3 from './assests/image_3.jpg';

function App() {
  return (
    <div className="App">
      <Carousel className="carousel" height={300} width={500} yOrigin={42} yRadius={48} autoPlay={true}>
        <div key={1}>
          <img alt="one" src={Image1}/>
        </div>
        <div key={2}>
          <img alt="two" src={Image2}/>
        </div>
        <div key={3}>
          <img alt="three" src={Image3}/>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
