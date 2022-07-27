import Link from 'next/link'
import HomeHeader_2 from "../../components/HomeHeader_2"
import Layout_2 from '../../components/Layout_2'
import Footer_2 from '../../components/Footer_2'

function Home({ posts }) {
	return (
		<><Layout_2><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
		{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
		<div className=" ">{
			
			<div className="">
			<HomeHeader_2 />
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-3xl mx-auto">{}</div>
         </div>
			
		}<Footer_2/></div>
		</div></Layout_2>	
		</>
	)
}



export default Home 