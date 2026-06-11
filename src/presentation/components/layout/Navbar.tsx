import { Home, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./NavLink";
import { MobileNavLink } from "./MobileNavLink";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Inicio Logo y Titulo */}
          <div className="flex items-center">
            <span className="font-bold text-xl">GameStore</span>
          </div>
          {/* Fin Logo y Titulo */}
          {/* Inicio Navegación en escritorio */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink icon={<Home size={18} />} text="Inicio" to="/" />
            <NavLink icon={<ShoppingBag size={18} />} text="Catálogo" to="/catalog" />
          </div>
          {/* Fin Navegación en escritorio */}
          {/* Inicio Navegación menu móvil */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {/* Fin Navegación menu móvil */}
        </div>
      </div>
      {/* Inicio de Menu Movil */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 px-2 pt-2 pb-3 space-y-1">
          <MobileNavLink icon={<Home size={18} />} text="Inicio" to="/" />
          <MobileNavLink icon={<ShoppingBag size={18} />} text="Catálogo" to="/catalog" />
        </div>
      )}
      {/* Fin Menu Movil */}
    </nav>
  );
};