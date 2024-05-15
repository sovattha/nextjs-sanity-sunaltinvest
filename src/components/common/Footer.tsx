import Link from 'next/link'

import { social } from '~/data'

// import ScrollToTop from './ScrollToTop'

const Footer = () => {
  return (
    <footer>
      {social.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <i data-aos="zoom-in" aria-label={item.label || 'Social Media Link'}>
            {item.icon}
          </i>
        </a>
      ))}
      <p data-aos="zoom-in">© Tout droit reservée Sun Alternative Invest</p>
      <Link
        href="/politique-de-confidentialite"
        data-aos="fade-in"
        rel="preload"
        aria-label="Politique"
      >
        Mentions légales et Politique de confidentialité
      </Link>
      <p className="hero-line"></p>
      {/* <ScrollToTop /> */}
    </footer>
  )
}

export default Footer
