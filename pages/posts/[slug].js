import Image from "next/image";
import { useState, useEffect } from "react";
const URL = 'https://damp-scrubland-34325.herokuapp.com/';


export async function getStaticPaths() {



    const res = await fetch(`${URL}api/posts`);
    const posts = await res.json()
    const paths = posts.data.map((post) => {
        return { params: { slug: post.attributes.slug,} }
    })
    
    return {
       
        paths: paths,
        fallback: true
    };
}

export async function getStaticProps({params}) {
    const{slug}=params;
    const request = await fetch(`${URL}api/posts/${slug}`);
    const post = await request.json();
    return {
        props: {
            post,
        },
    }
}


function Content({post}) {
    const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);
    
    return (
        
        <div className="relative py-16 bg-transparent overflow-hidden">
            
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <h1>
                        <div className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                            Introducing
                        </div>
                        <div className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {post.data.attributes.title}
                        </div>
                    </h1>
                    <p className="mt-8 text-xl text-gray-500 leading-8">
                        {post.data.attributes.content}
                    </p>
                </div>

                <div>
                    <Image  
                        className="w-full rounded-lg"
                        src={post.data.attributes.coverlink} 
                        alt=""
                        width={1310}
                        height={873}
                    />

                </div>


            </div>
        </div>
        
    )
}

export default Content