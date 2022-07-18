import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';


function Blog({post}) {
    const [render, setRender] = useState(false);
   
   useEffect(() => {
      setRender(true);
   }, []);
    return (
        <Link href={"/posts/" + post.attributes.slug}>
        <a>
            
  <div className="flex-shrink-0">
    <img  className="h-48 w-full object-cover" src={post.attributes.coverlink} alt="" />
    
  </div>
  <div className="flex-1 bg-white p-6 flex flex-col justify-between items-center">
    <div className="flex-1 items-center">
      <div className="text-sm font-medium text-indigo-600">
        
      </div>
      <a  className="block mt-2 direction-column  ">
        <div className="text-xl font-semibold text-gray-900 flex justify-center">{post.attributes.title}</div>
        <div className="mt-3 text-base text-gray-500 flex justify-center">{post.attributes.description}</div>
      </a>
    </div>
    <div className="mt-6  flex justify-center">
      <div className="flex-shrink-0 flex justify-center">
        
      </div>
      <div className="ml-3">
        <div className="text-sm font-medium text-gray-900 flex justify-center">
          <a href={post.attributes.author} className="hover:underline">
            {post.attributes.author}
          </a>
        </div>
    
      </div>
    </div>
  </div>
  </a>
  </Link>
    )
}

export default Blog