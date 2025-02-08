import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          MyApp
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="text-white hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-gray-200">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}