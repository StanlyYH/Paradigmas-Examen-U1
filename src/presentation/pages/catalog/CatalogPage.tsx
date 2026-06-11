import { useState } from "react";
import { GameCard } from "../../components/games/GameCard";

export const CatalogPage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
    setTotalSpent((prev) => prev + 59.99);
  };

  const clearCart = () => {
    setCartCount(0);
    setTotalSpent(0);
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Catálogo de videojuegos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GameCard title="Mario Kart" genre="Carreras" price={59.99} available={true} icon="🏎️" />
          <GameCard title="Zelda" genre="Aventura" price={49.99} available={true} icon="🗡️" />
          <GameCard title="FIFA 25" genre="Deportes" price={39.99} available={false} icon="⚽" />
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <button onClick={addToCart} className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Agregar al carrito (+$59.99)
          </button>

          <button onClick={clearCart} className="bg-red-600 text-white px-4 py-2 rounded-md">
            Vaciar carrito
          </button>

          <button onClick={toggleCart} className="bg-gray-700 text-white px-4 py-2 rounded-md">
            Ver resumen
          </button>
        </div>

        {showCart && (
          <div className="bg-amber-300 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Resumen del carrito</h2>
            <p>Juegos en carrito: {cartCount}</p>
            <p>Total a pagar: ${totalSpent.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};