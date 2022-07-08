import Link from 'next/link'
import Divider from '../components/Divider'

function Home({ posts}) {
	return (
	  <div className="relative bg-transparent pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
		<div className="absolute inset-0">
		  <div className="bg-transparent h-1/3 sm:h-2/3" />
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
			  <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<div className="flex-shrink-0">
				  <img className="h-48 w-full object-cover" src={post.attributes.imageUrl} alt="" />
				</div>
				<div className="flex-1 bg-white p-6 flex flex-col justify-between">
				  <div className="flex-1">
					<p className="text-sm font-medium text-indigo-600">
					  
					</p>
					<a  className="block mt-2">
					  <p className="text-xl font-semibold text-gray-900">{post.attributes.title}</p>
					  <p className="mt-3 text-base text-gray-500">{post.attributes.content}</p>
					</a>
				  </div>
				  <div className="mt-6 flex items-center">
					<div className="flex-shrink-0">
					  
					</div>
					<div className="ml-3">
					  <p className="text-sm font-medium text-gray-900">
						<a href={post.attributes.author} className="hover:underline">
						  {post.attributes.author}
						</a>
					  </p>
					  <div className="flex space-x-1 text-sm text-gray-500">
						<time></time>
						<span aria-hidden="true">&middot;</span>
						<span>read</span>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			))}
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