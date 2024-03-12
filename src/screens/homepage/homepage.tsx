import { useState, useEffect } from 'react';

import a from '../../images/1.jpg';
import b from '../../images/2.jpg';
import c from '../../images/3.jpg';
import d from '../../images/4.jpg';
import e from '../../images/5.jpg';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  
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


  const navigate = useNavigate()


  return (
    <div className=" flex flex-col justify-center items-center bg-black w-screen h-screen gap-5 ">
      <h1 className=" text-white">HOMEPAGE</h1>
        <Carousel images={images} /> 
      
        <input 
          className=' text-black text-[25px] font-semibold w-[200px] h-[50px] bg-white rounded-lg mt-6 hover:bg-opacity-90 cursor-pointer active:scale-95 ' 
          type="button" 
          value="Go to table" 
          onClick={()=>{navigate('/Haniiwaakusu/table')}} 
        />
    </div>
  );

}



export default Homepage
