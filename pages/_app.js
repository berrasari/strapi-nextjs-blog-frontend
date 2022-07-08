import '../styles/globals.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {

  return <Layout><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
  <div className="max-w-3xl mx-auto">{<Component {...pageProps} /> }<Footer/></div>
</div></Layout>
}

export default MyApp
