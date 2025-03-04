import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="max-h-36 h-36 bg-red-200 shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <span className='flex items-center gap-2'>English <Image src="/images/arrow-down.png" alt="down-arrow" width={24} height={24} /></span>
          <Image src="/logo.png" alt="Flex Crew Logo" className="h-10" width={100} height={100} />
          <h1 className="text-xl font-bold ml-2">Flex Crew</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">For Businesses</Link>
            </li>
            <li>
              <Link href="/">For Workers</Link>
            </li>
            <li>
              <Link href="/">Construction Insights</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
            <li>
              <Link href="/">Post a Job</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
