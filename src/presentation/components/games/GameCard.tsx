import React from "react";

interface Props {
  title: string;
  genre: string;
  price: number;
  available: boolean;
  icon?: React.ReactNode;
}

export const GameCard = ({title, genre, price, available, icon,}: Props) => {
  return (
    <div className="bg-blue-400 rounded-lg shadow-md p-6 text-center">

      {icon && (
        <div className="text-4xl mb-3">
          {icon}
        </div>
      )}

      <h2 className="text-black text-2xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-black mb-2">
        {genre}
      </p>

      <p className="text-black text-xl font-semibold mb-3">
        ${price.toFixed(2)}
      </p>

      <span
        className={`px-3 py-1 rounded-full text-white ${
          available
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >
        {available ? "Disponible" : "Agotado"}
      </span>

    </div>
  );
};

