import Link from 'next/link';
import { Button } from './ui/button';

// Components
import Nav from './nav';
import MobilNav from './MobilNav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold text-black">
            Lucas<span className="text-accent">.</span>
          </h1>
        </Link>


        {/* Desktop nav & hire button*/}
        <div className="hidden xl:flex items-center gap-8">
         <Nav />
         <Link href="/contact">
            <Button>Contactez-moi !</Button>
         </Link>
        </div>

        {/*Mobile nav*/}
        <div className="xl:hidden">
            <MobilNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
