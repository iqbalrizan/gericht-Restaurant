import React from 'react';
import g from "../../assets/G.png"
import knife from "../../assets/knife.png"
import spoon from "../../assets/spoon.png"

import './AboutUs.scss';

const AboutUs = () => (
  <div className='aboutus' id='about'>
    <img src={g} alt="" className='bg' />


    <div className="wrapper">
      <div className="wrapperleft">
        <h1>About Us</h1>
        <img src={spoon} alt="" className='spoon' />
        <p>At our culinary artists pour their hearts into every dish. We meticulously source the freshest ingredients from local farmers and suppliers, ensuring that each plate is a celebration of flavors and textures. From traditional favorites to innovative creations, our menu caters to diverse palates and dietary preferences.</p>
        <button>Know More</button>
      </div>
      <img src={knife} alt="" className='knife' />
      <div className="wrapperright">
        <h1>Our Menu</h1>
        <img src={spoon} alt="" className='spoon' />
        <p>Our commitment to exceptional service is as strong as our love for food. We take pride in our attentive and friendly staff, who are dedicated to making your dining experience delightful and memorable. Whether you're celebrating a special occasion & enjoying a casual meal with friends, our team is here to make you feel right at home.</p>
        <button>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
