import Link from 'next/link'

function Home({posts}) {
	return (
		<>
		 
				<h1>Recent Posts</h1>
        {posts.data.map(post =>(
          <div key={posts.id}>
            <h2>Title : {post.attributes.title}</h2>
            <h3>Author : {post.attributes.author}</h3>
            <div>Content : {post.attributes.content}</div>
          </div>
        ))};
				
		
		</>
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