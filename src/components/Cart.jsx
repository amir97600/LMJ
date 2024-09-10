import "../styles/Cart.css";
import { useState, useEffect } from "react";

const Cart = ({ cart, updateCart }) => {
  const [isOpen, setIsOpen] = useState(true);
  const Total = cart.reduce(
    (acc, plantType) => acc + plantType.price * plantType.amount,
    0
  );

  useEffect(() => {
    document.title = `LMJ: ${Total}€ d'achats`;
  }, [Total]);

  useEffect(() => {});

  return isOpen ? (
    <div className="Panier p-4  border border-gray-200 rounded-lg shadow sm:p-8  dark:border-gray-700 ">
      <div className="flex items-center justify-between mb-4">
        {!cart.length >= 1 ? (
          <h5 className=" mb-5 text-xl font-bold leading-none text-gray-900 dark:text-white">
            Panier vide...
          </h5>
        ) : (
          <h5 className=" mb-5 text-xl font-bold leading-none text-gray-900 dark:text-white">
            Panier
          </h5>
        )}
        <div style={{ display: "flex" }}>
          <h5 className="text-sm font-medium text-blue-600">
            Total : {Total} €
          </h5>
          <button
            className="px-3 py-2 text-xs ms-3"
            onClick={() => setIsOpen(false)}
          >
            Fermer
          </button>
        </div>
      </div>

      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {cart.map(({ name, cover, price, amount }, index) => (
            <li key={`${name}-${index}`} className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={cover}
                    alt={name}
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {name}
                  </p>
                  <p className="text-sm text-gray-700 truncate dark:text-gray-400">
                    x {amount}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {price} €
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {cart.length >= 1 && (
        <button
          onClick={() => {
            updateCart([]);
          }}
        >
          Vider le Panier
        </button>
      )}
    </div>
  ) : (
    <div className="Panier white p-4  border border-gray-200 rounded-lg shadow sm:p-8  dark:border-gray-700">
      <button className="text-sm" onClick={() => setIsOpen(true)}>
        Ouvrir le Panier
      </button>
    </div>
  );
};

export default Cart;
