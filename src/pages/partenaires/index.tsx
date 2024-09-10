import { GetStaticProps } from 'next'
import { draftMode } from 'next/headers'
import { useLiveQuery } from 'next-sanity/preview'

import { Heading } from '~/components/common/Heading'
import { partners } from '~/data/index'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { partnersQuery } from '~/lib/sanity.queries'

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const partners = await client.fetch(partnersQuery)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      partners,
      preview,
    },
  }
}

// Composant PortfolioItem pour représenter chaque partenaire
const PartnerItem = ({ imageSrc, altText, description }) => {
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
        <PartnerItem
          key={index}
          imageSrc={partner.imageSrc}
          altText={partner.altText}
          description={partner.description}
        />
      ))}
    </div>
  )
}

const PartnersPage = () => {
  const [livePartners] = useLiveQuery(partners, partnersQuery)

  return (
    <article>
      <div className="container" id="partners">
        <Heading title="Nos partenaires" />
        <p>
          Nous sommes ravis de vous présenter nos partenaires locaux et
          l&apos;écosystème que nous avons construit, unissant nos forces dans
          un objectif commun : aider l&apos;économie de nos régions.<br></br>
        </p>
        <PartnerList partners={livePartners} />
      </div>
    </article>
  )
}

export default PartnersPage
