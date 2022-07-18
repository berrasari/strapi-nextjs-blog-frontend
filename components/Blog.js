import React from 'react'
import Link from 'next/link';

function Blog({post}) {
    return (
        <Link href={"/posts/" + post.attributes.slug}>
        <a>
            
  <div className="flex-shrink-0">
    <img  className="h-48 w-full object-cover" src={post.attributes.coverlink} alt="" />
    
  </div>
  <div className="flex-1 bg-white p-6 flex flex-col justify-between items-center">
    <div className="flex-1 items-center">
      <p className="text-sm font-medium text-indigo-600">
        
      </p>
      <a  className="block mt-2 direction-column  ">
        <p className="text-xl font-semibold text-gray-900 flex justify-center">{post.attributes.title}</p>
        <p className="mt-3 text-base text-gray-500 flex justify-center">{post.attributes.description}</p>
      </a>
    </div>
    <div className="mt-6  flex justify-center">
      <div className="flex-shrink-0 flex justify-center">
        
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900 flex justify-center">
          <a href={post.attributes.author} className="hover:underline">
            {post.attributes.author}
          </a>
        </p>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time></time>
          
        </div>
      </div>
    </div>
  </div>
  </a>
  </Link>
    )
}

export default Blog