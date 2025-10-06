import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
              ALX Project
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className={`hover:text-blue-200 transition-colors ${
                isActive('/') ? 'text-blue-200 font-semibold underline' : ''
              }`}
            >
              Main
            </Link>
            <Link 
              href="/home" 
              className={`hover:text-blue-200 transition-colors ${
                isActive('/home') ? 'text-blue-200 font-semibold underline' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`hover:text-blue-200 transition-colors ${
                isActive('/about') ? 'text-blue-200 font-semibold underline' : ''
              }`}
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex flex-col space-y-2 mt-4">
          <Link 
            href="/" 
            className={`py-2 px-4 rounded hover:bg-blue-700 transition-colors ${
              isActive('/') ? 'bg-blue-700 font-semibold' : ''
            }`}
          >
            Main
          </Link>
          <Link 
            href="/home" 
            className={`py-2 px-4 rounded hover:bg-blue-700 transition-colors ${
              isActive('/home') ? 'bg-blue-700 font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`py-2 px-4 rounded hover:bg-blue-700 transition-colors ${
              isActive('/about') ? 'bg-blue-700 font-semibold' : ''
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;