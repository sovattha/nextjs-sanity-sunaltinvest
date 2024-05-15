import Footer from '~/components/common/Footer'
import Header from '~/components/common/Header'

export default function RootContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
