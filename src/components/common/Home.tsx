import { Hero } from '~/components/Hero'
import { HomeAbout } from '~/components/HomeAbout'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <hr className="hero-line"></hr>
      {/* <Advantages />
      <Services />
      <hr className="hero-line"></hr>
      <Contact /> */}
    </>
  )
}
