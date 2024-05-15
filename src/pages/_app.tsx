import '~/styles/global.css'
import '~/styles/aboutComponent.css'
import '~/styles/aboutDetailsPage.css'
import '~/styles/blogDetailsPage.css'
import '~/styles/counterComponent.css'
import '~/styles/Header.css'
import '~/styles/headerComponent.css'
import '~/styles/heroComponent.css'
import '~/styles/legalSectionComponent.css'
import '~/styles/mentionsLegales.css'
import '~/styles/portfolioPage.css'
import '~/styles/serviceComponent.css'
import '~/styles/servicePage.css'
import '~/styles/testimonialsComponent.css'

import type { AppProps } from 'next/app'
import { lazy } from 'react'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('~/components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
