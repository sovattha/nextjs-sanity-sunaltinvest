import { Hero } from '~/components/Hero'
import { HomeAbout } from '~/components/HomeAbout'
import Services from '~/components/Services'
import IndexPage from '~/pages'
import Contact from '~/pages/contact'

import { Advantages } from '../Advantages'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <hr className="hero-line"></hr>
      <Advantages />
      <Services />
      <hr className="hero-line"></hr>
      <Contact />
    </>
  )
}
