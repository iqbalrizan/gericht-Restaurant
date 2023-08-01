import React from 'react'
import "./MenuItem.scss"

const MenuItem = ({title, price, tags}) => {
  return (
    <div className='menuitems'>
        <div className="menu-list">
            {title}
            <div  className='dash'/>
            {price}
        </div>
        <div className="tags">
            {tags}
        </div>
    </div>
  )
}

export default MenuItem