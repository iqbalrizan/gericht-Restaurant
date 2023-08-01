import React from 'react';
import chef from "../../assets/chef.png"
import spoon from "../../assets/spoon.png"
import quote from "../../assets/quote.png"
import signature from "../../assets/sign.png"

import './Chef.scss';

const Chef = () => (
  <div className='chef'>
    <div className="chef-left">
      <img src={chef} alt="" />
    </div>
    <div className="chef-right">
    <div className="subheading">
      <h5>Chef's Word</h5>
      <img src={spoon} alt="" />
    </div>
    <h1>
      What We Believe In
    </h1>
    <div className="quote">
      <img src={quote} alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio vel facilis unde porro sit recusandae quam omnis aliquam quos laboriosam adipisci officiis laborum ut magnam voluptates, fugiat quod. Incidunt.</p>
    </div>
    <div className="chef-name">
      <p>Kevin Luo</p>
      <h4>Chef And Founder</h4>
    </div>
    <div className="signature">
      <img src={signature} alt="" />
    </div>
    </div>
  </div>
);

export default Chef;
