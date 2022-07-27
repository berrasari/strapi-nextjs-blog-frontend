import Link from 'next/link'
import HomeHeader from "../components/HomeHeader"
import Layout from "../components/Layout"
import Footer from "../components/Footer"



function Home({ posts }) {
	return (
		<><Layout><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
		{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
		<div className=" ">{
			
			<div className="">
			<HomeHeader />
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-3xl mx-auto">{}</div>
         </div>
			
		}<Footer/></div>
		</div></Layout>	
		</>
	)
}



export default Home 