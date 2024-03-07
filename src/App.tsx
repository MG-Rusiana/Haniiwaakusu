import { useState, useEffect } from 'react';

import a from './../src/images/1.jpg';
import b from './../src/images/2.jpg';
import c from './../src/images/3.jpg';
import d from './../src/images/4.jpg';
import e from './../src/images/5.jpg';



function App() {
  const images = [a, b, c, d, e];

  type CarouselProps = {
    images: string[];
  };
  
  const Carousel =  ( { images }: CarouselProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(timer);
    }, [currentImageIndex, images.length]);
  
    return (
      <div className="w-[60%] h-[60%] bg-white">
        <img className=" w-full h-full object-cover " src={images[currentImageIndex]} alt="carousel" />
        <div className="flex justify-center space-x-2 mt-4">
        {images.map((_image, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${currentImageIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
      
    );
  };

  return (
    <div className=" flex flex-col justify-center items-center bg-black w-screen h-screen gap-5 ">
      <p className=" text-white">hello fresh</p>
        <Carousel images={images} /> 
    </div>
  );

}

export default App
