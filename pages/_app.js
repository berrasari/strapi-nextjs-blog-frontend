import '../styles/globals.css'
import Layout from "../components/Layout"
import Footer from "../components/Footer"


function MyApp({ Component, pageProps }) {

  return <><div className="max-w-full ">
  {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
  <div className=" ">{<Component {...pageProps} /> }</div>
</div></>
}

export default MyApp
