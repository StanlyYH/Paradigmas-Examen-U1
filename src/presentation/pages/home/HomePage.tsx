import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Bienvenido a GameStore
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-black">Juegos disponibles</p>
            <p className="text-4xl font-bold text-blue-600">120</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-black">Ofertas activas</p>
            <p className="text-4xl font-bold text-blue-600">15</p>
          </div>
        </div>

        <Link
          to="/catalog"
          className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700"
        >
          Ver catálogo
        </Link>
      </div>
    </div>
  );
};

/**
 * <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
 * 
 */