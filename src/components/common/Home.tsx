import { Hero } from '~/components/Hero'
import { HomeAbout } from '~/components/HomeAbout'
import { Advantages } from '../Advantages'
import Services from '~/components/Services'
import Contact from '~/pages/contact'

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
