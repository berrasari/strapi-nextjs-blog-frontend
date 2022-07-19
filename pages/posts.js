import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Blog from "../components/Blog";

export async function getStaticProps() {
  const request = await fetch(
    `https://damp-scrubland-34325.herokuapp.com/api/posts/`
  );
  const posts = await request.json();
  return {
    props: {
      posts,
    },
  };
}
function Home({ posts }) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <div className="relative bg-transparent pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-transparent h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <h3 className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </h3>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.data.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-lg items-center shadow-lg overflow-hidden"
            >
				<Link href={"/posts/" + post.attributes.slug}>
        
            
              <div class="transition-all duration-150  w-full px-4 py-6 ">
                <div class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                  <div class="md:flex-shrink-0">
                    <img
                      src={post.attributes.coverlink}
                      alt="Blog Cover"
                      class="object-fill w-full rounded-lg rounded-b-none md:h-56"
                    />
                  </div>
                  <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
                    <div class="flex flex-row items-center">
                      <div class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"></div>

                      <div class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"></div>

                      <div class="text-xs font-medium text-gray-500 flex flex-row items-center"></div>
                    </div>
                  </div>
                  <hr class="border-gray-300" />
                  <div class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
                    <a href="#" class="hover:underline">
                      <h2 class="text-2xl font-bold tracking-normal text-gray-800">
                        {post.attributes.title}
                      </h2>
                    </a>
                  </div>
                  <hr class="border-gray-300" />
                  <p class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                    {post.attributes.description}
                  </p>
                  <hr class="border-gray-300" />
                  <section class="px-4 py-2 mt-2">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center flex-1">
                        <div class="flex flex-col mx-2">
                          <div
                            href=""
                            class="font-semibold text-gray-700 hover:underline"
                          >
                            {post.attributes.author}
                          </div>
                          <div class="text-xs text-gray-600">
                            {post.attributes.createdAt}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
           
		   </Link>
		    </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
