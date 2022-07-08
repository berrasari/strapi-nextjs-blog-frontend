import Footer from "./Footer"
import Navbar from "./Navbar"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      { children }
      
    </div>
  );
}
 
export default Layout;