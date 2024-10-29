import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Tooltip as MUITooltip } from '@mui/material'
import React from 'react'

import { Heading } from '~/components/common/Heading'

import { serviceDetails } from '../../data/index'

const renderBullets = (bullets, showIconCheck) => (
  <ul className="bulletList">
    {bullets.map((bullet, index) => (
      <li
        className="bulletItem"
        key={`${bullet.id}-${showIconCheck ? 'working' : 'benefits'}-${index}`}
      >
        {showIconCheck && <CheckCircleIcon style={{ marginRight: '8px' }} />}
        {!showIconCheck && <span className="circle-number">{bullet.id}</span>}

        {bullet.tooltip && (
          <MUITooltip title={bullet.tooltip} arrow placement="left">
            <div>{bullet.title}</div>
          </MUITooltip>
        )}
      </li>
    ))}
  </ul>
)

const ServiceDetailsGrid = () => {
  return (
    <div className="grid">
      {serviceDetails.map((service, index) => (
        <div className="card" key={service.id} data-aos="flip-left">
          <div className="wrapper-card">
            <h2>{service.title}</h2>
            <p>{service.desc}</p>

            <div className="working">
              <h2>Fonctionnement</h2>
              {renderBullets(service.bulletWorking, false)}
            </div>

            <div className="benefit">
              <h2>Avantages</h2>
              {renderBullets(service.bulletBenefits, true)}
            </div>

            <div className="buttons">
              <a href="mailto:fanny.margeolet@sunaltinvest.com?subject=Contact%20-%20Projet%20de%20Transition%20Énergétique&body=Nous%20sommes%20intéressés%20par%20votre%20projet%20de%20transition%20énergétique.%20Nous%20aimerions%20obtenir%20plus%20d'informations,%20discuter%20de%20nos%20besoins%20spécifiques%20et%20éventuellement%20planifier%20une%20consultation.%20Ensemble,%20nous%20pouvons%20créer%20un%20avenir%20plus%20durable.">
                <button className="button-secondary">Obtenir un devis</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const ServicesPage = () => {
  return (
    <section id="servicesDetails" className="container">
      <Heading title="Explorez les opportunités offertes par Sun Alternative Invest" />
      <p className="sub-heading"></p>
      <p>
        Nous proposons des solutions clés-en-main pour accompagner les
        entreprises dans la réalisation de leurs projets d&apos;énergie renouvelable.
        Découvrez comment nous pouvons vous aider à réduire vos coûts
        énergétiques tout en adoptant une approche durable.
      </p>

      <ServiceDetailsGrid />
    </section>
  )
}

export default ServicesPage
