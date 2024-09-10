import { plantList } from "../data/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";

const ShoppingList = ({ cart, updateCart, category, updateCategory }) => {
  const addToCart = (name, cover, price) => {
    const isInCart = cart.find((plant) => plant.name === name);

    if (isInCart) {
      const filteredCart = cart.filter((plant) => plant.name !== name);
      let amount = isInCart.amount + 1;
      updateCart([...filteredCart, { name, cover, price, amount }]);
    } else {
      let amount = 1;
      updateCart([...cart, { name, cover, price, amount }]);
    }
  };

  const currentList =
    category === "all"
      ? plantList
      : plantList.filter((plant) => plant.category === category);

  return (
    <div className="Shopping-list-container">
      <Categories category={category} updateCategory={updateCategory} />
      <ul className="lmj-plant-list">
        {currentList.map(({ id, name, light, water, cover, price }) => (
          <div key={id}>
            <PlantItem
              key={`${id}`}
              name={name}
              cover={cover}
              price={price}
              id={id}
              light={light}
              water={water}
            />
            <button onClick={() => addToCart(name, cover, price)}>
              Ajouter
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
