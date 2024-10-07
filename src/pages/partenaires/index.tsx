import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import { Heading } from '~/components/common/Heading'
// import { partners } from '~/data'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPartners, Partner, partnersQuery } from '~/lib/sanity.queries'

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const client = getClient(preview ? { token: readToken } : undefined)
  const partners = await getPartners(client)
  console.log('>> partners', partners)

  return {
    props: {
      token: preview ? readToken : '',
      partners,
      preview,
    },
  }
}

const PartnersPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const { partners } = props
  const livePartners = useLiveQuery(partners, partnersQuery)
  console.log('livePartners', livePartners.filter(Boolean))

  return (
    <article>
      <div className="container" id="partners">
        <Heading title="Nos partenaires" />
        <p>
          Nous sommes ravis de vous présenter nos partenaires locaux et
          l&apos;écosystème que nous avons construit, unissant nos forces dans
          un objectif commun : aider l&apos;économie de nos régions.<br></br>
        </p>
        <PartnerList partners={livePartners.filter(Boolean)} />
      </div>
    </article>
  )
}

// Composant PartnerList pour afficher la liste des partenaires
const PartnerList = ({ partners }) => {
  return (
    <div className="wrapper-partners">
      {partners.map((partner, index) => {
        return partner && <PartnerItem key={index} {...partner} />
      })}
    </div>
  )
}

// Composant PortfolioItem pour représenter chaque partenaire
const PartnerItem = ({ title, imageSrc, altText, description }) => {
  return (
    <div
      className="partners-card"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      {/* <div className="wrapper-img">
        <img src={imageSrc} alt={altText} className="img-partners" />
      </div> */}
      <div className="partners-desc">
        <h4 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className="partners-desc">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}

export default PartnersPage
