import Link from 'next/link'

import { Heading } from '~/components/common/Heading'
import { blogs } from '~/data/index'

const Blogs = () => {
  return (
    <div className="blog">
      <div className="container">
        <Heading title="Blog" />
        <p className="sub-heading">
          Un regard approfondi sur Autoconsommation, les Tendances du Prix de
          l'Électricité en 2024, et Défis de la Transition. <br></br>
          Découvrez l'avenir de l'énergie à travers des conseils pratiques ou
          l'information rencontre l'inspiration.
        </p>

        <div className="content grid3 grid-blog">
          {blogs.map((item, index) => (
            <div className="box" data-aos="flip-left" key={index}>
              <div className="img" data-aos="fade-up">
                <img src={item.cover} alt={item.title} data-aos="fade-down" />
              </div>

              <div className="text">
                <h2 data-aos="fade-right" className="grid-blog-title">
                  {item.title}
                </h2>
                <p data-aos="fade-up-right">{item.desc}</p>
                <div className="buttons">
                  <Link
                    href={`/blogs/${item.id}`}
                    aria-label="Blog"
                    rel="preload"
                    passHref
                  >
                    <button className="button-primary">Lire l'article</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
