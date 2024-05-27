import React from 'react'
import { Heading } from '~/components/common/Heading'
import { partners } from '~/data/index'

// Composant PortfolioItem pour représenter chaque partenaire
const PortfolioItem = ({ imageSrc, altText, description }) => {
  return (
    <div
      className="partners-card"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="wrapper-img">
        <img src={imageSrc} alt={altText} className="img-partners" />
      </div>
      <div className="partners-desc">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}

// Composant PartnerList pour afficher la liste des partenaires
const PartnerList = ({ partners }) => {
  return (
    <div className="wrapper-partners">
      {partners.map((partner, index) => (
        <PortfolioItem
          key={index}
          imageSrc={partner.imageSrc}
          altText={partner.altText}
          description={partner.description}
        />
      ))}
    </div>
  )
}

const Portfolio = () => {
  return (
    <article>
      <div className="container" id="partners">
        <Heading title="Nos partenaires" />
        <p>
          Nous sommes ravis de vous présenter nos partenaires locaux et
          l'écosystème que nous avons construit, unissant nos forces dans un
          objectif commun : aider l'économie de nos régions.<br></br>
        </p>
        <PartnerList partners={partners} />
      </div>
    </article>
  )
}

export default Portfolio
