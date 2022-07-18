
import Blog from '../components/Blog'
import { useEffect, useState } from 'react'

function Home({ posts }) {

	return (
		<div className="relative bg-transparent pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div className="bg-indigo-100 h-1/3 absolute inset-0">
				<div className="  h-1/8 sm:h-2/3" />
			</div>
			<div className="relative max-w-7xl mx-auto">
				<div className="text-center">
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Popupbuilder.io</h2>
					<p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
					</p>
				</div>
				<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
					{posts.data.map((post) => (
						<div>
						<div key={post.id} className="flex justify-center flex-col rounded-lg shadow-lg overflow-hidden">

							<Blog post={post} />


						</div></div>


					)
					)}

				</div>
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const request = await fetch(`https://damp-scrubland-34325.herokuapp.com/api/posts/`);
	const posts = await request.json();
	return {
		props: {
			posts,
		},
	}
}

export default Home