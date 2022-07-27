import Footer from "./Footer"
import Navbar_2 from "./Navbar_2"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Layout_2 = ({ children }) => {
  return (
    <div className="content">
      <Navbar_2 />
      { children }
      
    </div>
  );
}
 
export default Layout_2;