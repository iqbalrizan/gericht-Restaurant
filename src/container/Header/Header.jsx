import React from 'react';
import spoon from "../../assets/spoon.svg"
import header from "../../assets/welcome.png"
import './Header.scss';

const Header = () => (
  <div className='header' id='home'>
    <div className="header-left">
      <h5>Chase The New Flavour</h5>
      <img src={spoon} alt="" />
      <h1>The Key to Fine Dining</h1>
      <p>A Symphony of Flavors, A Feast for the Senses & A Fusion of Cultures, A Fusion of Flavors - Celebrating Diversity in Food</p>
      <button>Explore Menu</button>
    </div>
    <div className="header-right">
      <img src={header} alt="" />
    </div>
  </div>
);

export default Header;
