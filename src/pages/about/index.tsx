import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import Image from 'next/image'
import React from 'react'

import { Heading } from '~/components/common/Heading'
import { aboutsFondateurs, aboutsObjectifs, aboutValues } from '~/data'

const Fondateurs = () => {
  return (
    <section id="fondateurs">
      {aboutsFondateurs.map((val, index, array) => (
        <div className="wrapper-fondateurs container" key={index}>
          <div className="">
            <Heading title={val.title} />
            <div className="right" data-aos="fade-down-left">
              {val.content}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-row align-items-center">
              <Image
                src={val.cover}
                className="img-fluid beige-shadow aboutDetailsImg"
                alt={val.title_cover}
                data-aos="fade-down-right"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '30vh', height: '25vh' }}
              />
              <span className="aboutDetailsImgSpan">{val.title_cover}</span>
            </div>

            <div className="flex flex-row align-items-center">
              <Image
                src={val.second_cover}
                className="img-fluid beige-shadow aboutDetailsImg"
                alt={val.title_second_cover}
                data-aos="fade-down-right"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '30vh', height: '25vh' }}
              />
              <span className="aboutDetailsImgSpan">
                {val.title_second_cover}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

const Objectif = ({ objectif, isReverse }) => {
  const flexDirectionStyle = isReverse ? 'row' : 'row-reverse'

  return (
    <div className="container wrapper-objectifs-box">
      <div
        className="box"
        key={objectif.title}
        style={{ flexDirection: flexDirectionStyle }}
      >
        {/* Left side with text */}
        <div className="left-side" data-aos="zoom-out-up">
          <i>
            <FormatQuoteIcon />
          </i>
          <h2>{objectif.title}</h2>
          <div className="text-left" data-aos="zoom-out-left">
            {objectif.content}
          </div>
        </div>

        {/* Right side with image */}
        <div className="right-side" data-aos="fade-down-right">
          <Image
            src={objectif.cover}
            className="img-fluid beige-shadow img-about-details"
            alt={objectif.title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '250px', height: '180px' }}
          />
        </div>
      </div>
    </div>
  )
}

const AboutValues = () => {
  return (
    <section className="aboutValues">
      <div className="container">
        {aboutValues.map((val, index, array) => (
          <div className="" key={index}>
            <Heading title={val.title} />
            <div>{val.content}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const About = () => {
  return (
    <section className="aboutDetails">
      <Fondateurs />
      <p className="hero-line"></p>

      <section className="objectifs bgImg">
        <Objectif objectif={aboutsObjectifs[0]} isReverse={false} />
        <Objectif objectif={aboutsObjectifs[1]} isReverse={true} />
      </section>

      <p className="hero-line"></p>
      <AboutValues />
    </section>
  )
}

export default About
