
function Home({posts}) {
	return (
		<>
			
				<h1>Recent Posts</h1>
        {posts.data.map(post =>(
          <div>
            <h2>Title : {post.attributes.title}</h2>
            <h3>Author : {post.attributes.author}</h3>
            <div>Content : {post.attributes.content}</div>
          </div>
        ))}
				
			  

			

		</>
	)
}

export async function getServerSideProps() {
	const request = await fetch(`http://localhost:1337/api/posts/`);
	const posts = await request.json();
	return {
		props: {
			posts,
		},
	}
}

export default Home