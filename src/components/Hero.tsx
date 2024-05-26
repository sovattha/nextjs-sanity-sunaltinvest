'use client'

import Link from 'next/link'
import React from 'react'
import Typewriter from 'typewriter-effect'

import { home } from '~/data'

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    window.scrollTo({
      behavior: 'smooth',
      top: section.offsetTop,
    })
  }
}

export const Hero = () => {
  return (
    <section className="hero-home">
      {home.map((val, index) => (
        <div className="heroContent" key={index}>
          <h1 className="hero-title">
            <Typewriter
              options={{
                strings: [`${val.name}`],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 70,
                pauseFor: 4500,
              }}
            />
          </h1>
          <h2 className="hero-sub-title" data-aos="fade-left">
            {val.desc}
          </h2>
          <div className="hero-action">
            <button className="button-primary" data-aos="fade-up-right">
              <a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact-section')
                }}
              >
                Contactez-nous
              </a>
            </button>

            <button className="button-secondary" data-aos="fade-up-right">
              <Link href="/about" className="black">
                En savoir plus
              </Link>
            </button>
          </div>
        </div>
      ))}
    </section>
  )
}
