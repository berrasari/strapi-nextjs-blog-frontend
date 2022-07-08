import Link from 'next/link'
import HomeHeader from "../components/HomeHeader"

function Home({ posts }) {
	return (
		<>
			<HomeHeader />
			<div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-3xl mx-auto">{<h1 className="text-3xl font-bold underline">
              HOME PAGE
			</h1>}</div>
         </div>
			
			
		</>
	)
}



export default Home 