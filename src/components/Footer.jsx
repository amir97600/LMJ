import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <div className="mb-6">
        <form id="mail-form">
          <input
            type="email"
            id="email"
            value={inputValue}
            onBlur={() => {
              if (inputValue !== "") {
                inputValue.includes("@")
                  ? null
                  : alert(
                      "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide."
                    ),
                  setInputValue("");
              }
            }}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className=" mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              alert(`Voici l'adresse e-mail : ${inputValue}`);
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Confirmer
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
