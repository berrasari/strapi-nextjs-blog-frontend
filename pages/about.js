import React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'


export default function about() {
  return (
    <>
    <><Layout><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
		{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
		<div className=" ">{
			
      <h1>About us page</h1>}<Footer/></div>
      </div></Layout>	
      </></>
  )
}
