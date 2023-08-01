import React from 'react';
import { data } from '../../constants';
import spoon from "../../assets/spoon.png"
import menu from "../../assets/menu.png"
import './SpecialMenu.scss';
import MenuItem from './menuItem';

const SpecialMenu = () => {
  return (
    <div className='specialmenu' id='menu'>
    <h5>Menu that Fits Your Palate</h5>
    <img src={spoon} alt="" className='spoon' />
    <h1>Today's Special</h1>
    <div className="wrapper">
      <div className="wrapper-left">
        <h2>Wine & Beer</h2>
      {data.wines.map((item) => (
        <MenuItem title={item.title} price={item.price} tags={item.tags} />
      ))}
      </div>
      <div className="wrapper-center">
      <img src={menu} alt="" className='menuimg' />
      </div>
      <div className="wrapper-right">
        <h2>Cocktails</h2>
      {data.cocktails.map((item) => (
        <MenuItem title={item.title} price={item.price} tags={item.tags} />
      ))}
      </div>
    </div>
    <button> 
      View More
    </button>
    </div>
  );
};

export default SpecialMenu;
