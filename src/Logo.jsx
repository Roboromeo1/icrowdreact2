import React from 'react'
import './Logo.css'

const Logo = (item) =>
{
    return <div className='column'>
    <img src={item.logo}  width = {"100%"} />
    <h3>{item.name}</h3>
    <p>{item.description}</p>

    </div>
}

export default Logo



