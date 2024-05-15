import Image from 'next/image'
import React from 'react'

import { Heading } from '~/components/common/Heading'
import { about } from '~/data'

export const About = () => {
  return (
    <section className="about container">
      <Heading title="Notre entreprise" />

      <div className="about-container-grid">
        <div className="wrapper-content-image">
          <div>
            <div>{about[0].content}</div>
          </div>
          <div className="grid-img-fondateurs">
            <Image
              src={about[1].cover}
              className="img-fluid beige-shadow"
              id="about-second-cover"
              alt="Mountain Solar Panels and Descriptive Text"
              data-aos="fade-down-right"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '150px', height: 'auto' }}
            />
          </div>
        </div>

        <div>
          <div>{about[1].content}</div>
        </div>
      </div>
    </section>
  )
}
