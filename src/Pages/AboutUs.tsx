import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
const AboutUs: React.FC = () => {
    const mode = useSelector((state:RootState)=>state.theme)
    return (
        <div className='aboutUsContainer' style={{display:"flex", alignItems:"center", justifyContent:'center'}}>
            <div className="sm:flex items-center max-w-screen-xl">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase" style={{
    color: mode ? 'white' : 'black', 
    
  }}>About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700" style={{color:mode? 'white':'black'}}>
                Welcome to Elite Earbuds, where superior sound meets unmatched craftsmanship. Our mission is to elevate your listening experience with high-end earbuds and headphones designed for discerning audiophiles and music enthusiasts. Each product in our collection is carefully selected for its exceptional sound quality, innovative technology, and luxurious design.

At Elite Earbuds, we understand that audio is personal, and we're dedicated to helping you find the perfect fit for your lifestyle. Whether you're seeking precision for studio sessions, pure immersion for music enjoyment, or the latest in wireless convenience, our range is tailored to meet your highest expectations.

Experience sound like never before with Elite Earbuds — where luxury meets performance.
            </p>
        </div>
    </div>
</div>
        </div>
    );
};

export default AboutUs;