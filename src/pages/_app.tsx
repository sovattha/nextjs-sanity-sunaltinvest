import 'aos/dist/aos.css'
import '~/styles/global.css'
import '~/styles/aboutComponent.css'
import '~/styles/aboutDetailsPage.css'
import '~/styles/blogComponent.css'
import '~/styles/blogDetailsPage.css'
import '~/styles/counterComponent.css'
import '~/styles/Header.css'
import '~/styles/headerComponent.css'
import '~/styles/heroComponent.css'
import '~/styles/legalSectionComponent.css'
import '~/styles/mentionsLegales.css'
import '~/styles/partenairesPage.css'
import '~/styles/serviceComponent.css'
import '~/styles/servicePage.css'
import '~/styles/testimonialsComponent.css'

import AOS from 'aos'
import type { AppProps } from 'next/app'
import { lazy } from 'react'
import { useEffect } from 'react'

import RootContainer from '~/components/common/RootContainer'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const { draftMode, token } = pageProps
  return (
    <>
      {draftMode ? (
        <PreviewProvider token={token}>
          <RootContainer>
            <Component {...pageProps} />
          </RootContainer>
        </PreviewProvider>
      ) : (
        <RootContainer>
          <Component {...pageProps} />
        </RootContainer>
      )}
    </>
  )
}
