import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Phone, Instagram } from 'lucide-react';

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-4">
              {/* All Natural Ingredients Badge - Vertically Centered, No Animation */}
              <div className="hidden sm:flex w-20 h-20 bg-white rounded-full shadow-lg flex-col items-center justify-center text-center p-2 border-2 border-cream shrink-0">
                <img src="https://cdn-icons-png.flaticon.com/512/2913/2913520.png" className="w-6 h-6 mb-1 object-contain" alt="Natural" />
                <span className="text-[7px] font-bold text-gray-800 uppercase tracking-tighter leading-tight font-display">
                  100% All<br/>Natural
                </span>
              </div>

              <Link to="/" className="text-2xl font-bold text-sage tracking-tight flex items-center gap-2">
                <span className="text-3xl">🐾</span>
                <span className="hidden sm:inline">THE FRESH BOWL</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-4 md:gap-8">
              <div className="hidden lg:flex items-center gap-6">
                <Link to="/how-it-works" className={`text-sm font-bold transition-colors ${location.pathname === '/how-it-works' ? 'text-sage' : 'text-gray-500 hover:text-sage'}`}>
                  How It Works
                </Link>
                <Link to="/custom-bases" className={`text-sm font-bold transition-colors ${location.pathname === '/custom-bases' ? 'text-sage' : 'text-gray-500 hover:text-sage'}`}>
                  Custom Bases
                </Link>
                <Link to="/gallery" className={`text-sm font-bold transition-colors ${location.pathname === '/gallery' ? 'text-sage' : 'text-gray-500 hover:text-sage'}`}>
  Kitchen Gallery
</Link>
                <Link to="/faq" className={`text-sm font-bold transition-colors ${location.pathname === '/faq' ? 'text-sage' : 'text-gray-500 hover:text-sage'}`}>
                  FAQ
                </Link>

              </div>

              <div className="h-6 w-[1px] bg-gray-100 hidden lg:block"></div>

              <div className="flex items-center gap-4 md:gap-6">
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-bold text-gray-600 hover:text-green-600 transition-colors">
                  <Phone className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">WhatsApp</span>
                </a>
                <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-bold text-gray-600 hover:text-pink-600 transition-colors">
                  <Instagram className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div>
              <h4 className="font-bold text-sage text-2xl uppercase tracking-tighter mb-2">The Fresh Bowl</h4>
              <p className="text-gray-500 text-sm">Homemade Dog Food • Hyderabad</p>
              <div className="mt-4 flex flex-col md:flex-row gap-4 text-sm text-gray-400">
                 <Link to="/" className="hover:text-sage">Menu</Link>
                 <Link to="/how-it-works" className="hover:text-sage">How It Works</Link>
                 <Link to="/custom-bases" className="hover:text-sage">Custom Bases</Link>
                 <Link to="/faq" className="hover:text-sage">Support & FAQ</Link>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-sm text-gray-400 hover:text-pink-500 hover:scale-110 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-sm text-gray-400 hover:text-green-500 hover:scale-110 transition-all">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-10 pt-8 text-center">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} The Fresh Bowl. Fresh Food, Happy Dogs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;