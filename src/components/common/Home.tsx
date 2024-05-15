import { About } from '../About'
import { Hero } from '../Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <hr className="hero-line"></hr>
      {/* <Advantages />
      <Services />
      <hr className="hero-line"></hr>
      <Contact /> */}
    </>
  )
}
