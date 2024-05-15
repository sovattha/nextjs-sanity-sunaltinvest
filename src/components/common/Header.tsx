import { Cancel as CroixIcon, Menu as MenuIcon } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router' // Import useRouter
import React, { CSSProperties, useState } from 'react'

import { navlink } from '~/data'

const Header = () => {
  const location = useRouter() // Remove the type annotation

  const [responsive, setResponsive] = useState(false)

  const isHomePage = location.pathname === '/'
  const headerStyle: CSSProperties = !isHomePage
    ? { position: 'relative' }
    : { position: 'absolute' }

  const navStyle: CSSProperties = !isHomePage
    ? { position: 'relative' }
    : { position: responsive ? 'absolute' : 'sticky' }

  const closeMenu = () => {
    setResponsive(false)
  }

  return (
    <header style={headerStyle} className={isHomePage ? 'home-nav' : ''}>
      <div className="logo">
        <Link href={'/'} aria-label="Home" rel="preload">
          <Image
            src="/images/logo.png"
            alt="Logo Sun Alternative Invest"
            data-aos="zoom-in-right"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '150px', height: 'auto' }}
          />
        </Link>
      </div>
      <div
        className={responsive ? 'hideMenu' : 'nav'}
        style={navStyle}
        aria-label="Main Navigation"
      >
        {navlink.map((links, index) => (
          <Link
            href={links.url}
            key={index}
            data-aos="zoom-in-left"
            className={links.url === location.pathname ? 'active' : ''}
            onClick={closeMenu}
          >
            {links.text}
          </Link>
        ))}
      </div>

      <button
        className={responsive ? 'toggle-opened' : 'toggle'}
        onClick={() => setResponsive(!responsive)}
        aria-label={responsive ? 'Close Menu' : 'Open Menu'}
      >
        {responsive ? (
          <CroixIcon className="icon" />
        ) : (
          <MenuIcon className="icon" />
        )}
      </button>
    </header>
  )
}

export default Header
