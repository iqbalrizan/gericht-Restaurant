import React from 'react'
import "./NewsLetter.scss"
import spoon from "../../assets/spoon.png"

const NewsLetter = () => {
  return (
    <div className='newsletter' id='contact'>
        <div className="subheading">
            <h5>Newsletter</h5>
            <img src={spoon} alt="" />
        </div>
        <h1>Subscribe to Our Newsletter</h1>
        <p>and never miss latest update !</p>
        <div className="form">
            <input type="text" placeholder='Email Adress' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter