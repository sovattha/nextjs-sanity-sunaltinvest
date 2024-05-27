import { Heading } from './common/Heading'
import { services } from '../data/index'

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <Heading title="Nos services" />
        <p>
          Nous nous occupons de toutes les phases du processus : études de
          faisabilité, installation, maintenance des panneaux solaires.
        </p>
      </div>

      <div className="content services-grid">
        {services.map((item, index) => (
          <div className="box" data-aos="flip-left" key={index}>
            <div className="img">
              <img src={item.cover} alt={item.title} />
            </div>
            <div className="text" data-aos="zoom-in">
              <h3 className="white">{item.title}</h3>
              <p data-aos="fade-up-right" className="text-left">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
