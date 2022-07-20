/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-align  h-16">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img 
                    className="hidden lg:block h-8 w-auto"
                    src="https://uploads-ssl.webflow.com/621d13492f32593429c0ddfb/6238b7d2906996bf1b10a9c3_popup-builder.png"
                    alt="Workflow"
                  />
                </div>
                <div className="ml-40 pl-36 hidden px-5 sm:ml-36 sm:flex sm:space-x-8" >
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-indigo-500 hover:text-gray-700" */}
                  <div 
                                        className="border-transparent text-gray-700 hover:border-indigo-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"

                    ><Link
                    href="/"
                  >
                    Home
                  </Link></div>
                  <div
                    className="border-transparent text-gray-700 hover:border-indigo-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    > <Link
                    href="/posts"
                  >
                    All Posts
                  </Link></div>
                 <div
                    className="border-transparent text-gray-700 hover:border-indigo-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    ><Link
                    href="/about"
                  >
                    About Us
                  </Link></div>
                  <div
                    className="border-transparent text-gray-700 hover:border-indigo-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    ><Link
                    href="#"
                  >
                    Calendar
                  </Link></div>
                  
                </div>
              </div>
              
            </div>
          </div>

         
        </>
      )}
    </Disclosure>
  )
}
