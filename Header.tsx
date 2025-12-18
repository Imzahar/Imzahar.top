import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-violet-800/30 backdrop-blur-sm bg-violet-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <Code className="w-6 h-6" />
            </div>
            <span className="text-xl">Imzahar</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-violet-300 transition-colors">Главная</Link>
            <Link to="/project" className="hover:text-violet-300 transition-colors">Проекты</Link>
            <Link to="/myiso" className="hover:text-violet-300 transition-colors">Мои образы</Link>
            <Link to="/windowsiso" className="hover:text-violet-300 transition-colors">Windows ISO</Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white hover:bg-violet-800/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 space-y-2">
            <Link 
              to="/" 
              className="block py-2 px-4 hover:bg-violet-800/30 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/project" 
              className="block py-2 px-4 hover:bg-violet-800/30 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Проекты
            </Link>
            <Link 
              to="/myiso" 
              className="block py-2 px-4 hover:bg-violet-800/30 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Мои образы
            </Link>
            <Link 
              to="/windowsiso" 
              className="block py-2 px-4 hover:bg-violet-800/30 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Windows ISO
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
