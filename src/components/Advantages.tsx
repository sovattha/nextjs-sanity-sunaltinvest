import React from 'react'

import { aboutAdvantages } from '../data/index'

export const Advantages = () => {
  return (
    <div className="hero counter container grid3 grid4 box-about">
      <div className="row-advantages">
        {aboutAdvantages.map((item, index) => (
          <div
            className="card-advantages col-lg-2 mr-0 ml-auto shadow"
            data-aos="zoom-in"
            key={index}
          >
            <i>{item.icon}</i>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
