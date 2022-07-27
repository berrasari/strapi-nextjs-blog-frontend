import '../styles/globals.css'



function MyApp({ Component, pageProps }) {

  return <><div className="max-w-full ">
  {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
  <div className=" ">{<Component {...pageProps} /> }</div>
</div></>
}

export default MyApp
