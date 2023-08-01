import React from 'react';
import {BiLogoInstagramAlt, BiLogoTwitter, BiLogoFacebook } from "react-icons/bi"
import spoon from "../../assets/spoon.png"

import './Footer.scss';

const Footer1 = () => (
  <div className='footer'>
    <div className="footer-left">
      <h2>Contact Us</h2>
      <p>9 W 53rd St. New York, NY 10019, USA</p>
      <p>212-344-1230</p>
      <p>212-555-1230</p>
    </div>
    <div className="footer-center">
    <h1>GERICHT</h1>
    <p>"The Best way to find yourself is to lose yourself in the service of others"</p>
    <img src={spoon} alt="" />
    <div className="social">
      <BiLogoFacebook />
      <BiLogoTwitter />
      <BiLogoInstagramAlt />
    </div>
    </div>
    <div className="footer-right">
      <h3>Working Hour</h3>
      <p>Monday-friday</p>
      <p>08:00 am - 12:00 am</p>
      <p>saturday - monday</p>
      <p>07:00 am - 11:00 pm</p>
    </div>
  </div>
);

export default Footer1;
