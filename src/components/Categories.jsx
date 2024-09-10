import { plantList } from "../data/plantList";

/*const plantByCategory = (plantCate, plant) => {
  const { category } = plant;
  if (plantCate.includes(category)) {
    null;
  } else {
    plantCate.push(category);
  }
  return plantCate;
};

const plantCategory = plantList.reduce(plantByCategory, []);*/

const plantCategory = [];
plantList.forEach((plant) => {
  plantCategory.includes(plant.category)
    ? null
    : plantCategory.push(plant.category);
});

const Categories = ({ updateCategory, category }) => {
  return (
    <div className="lmj-category-container flex justify-center">
      <select
        id="categories"
        value={category}
        onChange={(e) => updateCategory(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="all">Choisissez une categorie</option>
        {plantCategory.map((categorie, index) => (
          <option key={`${categorie}-${index}`} value={categorie}>
            {categorie}
          </option>
        ))}
      </select>
      <button className="p-0.5 m-0.5" onClick={() => updateCategory("all")}>
        Réinitialiser
      </button>
    </div>
  );
};

export default Categories;
