import React from 'react';
import logolaurels from "../../assets/logo.png"
import  spoon from "../../assets/spoon.png"
import laurels from "../../assets/laurels.png"

import './Laurels.scss';
import { data } from '../../constants';

const Laurels = () =>  {




  return (
    <div className='laurels' id='award'>
      <img src={logolaurels} alt="" className='logolaurels' />
      <div className="wrapper-laurels">
        <div className="wrapper-left">
          <div className="subheading">
            <h5>Award & Recognition</h5>
            <img src={spoon} alt="" />
          </div>
          <h1>Our Laurels</h1>
          <div className="award">
             {data.awards.map((item) => (
              <div className='subaward'>
              <img src={item.imgUrl} alt="" className='subawardimage' />
              <div className="awarddetail">
              <h3>
              {item.title}
                </h3>
                <h4>
              {item.subtitle}
                </h4>
              </div>
              </div>
             ))}
          </div>
        </div>
        <div className="wrapper-right">
          <img src={laurels} alt="" />
        </div>
      </div>
    </div>
  );
} 

export default Laurels;
