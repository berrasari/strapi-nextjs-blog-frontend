import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Popup Builder</h1>
      </div>
      <div><Link href="/"><a>Home</a></Link></div>
      <div><Link href="/about"><a>About</a></Link></div>
      
    </nav>
);
}
 
export default Navbar;