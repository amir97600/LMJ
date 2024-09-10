import CareScale from "./CareScale";
import "../styles/PlantItem.css";

const PlantItem = ({ name, cover, id, light, water, price }) => {
  return (
    <li
      data-modal-target={`modal+${name}`}
      data-modal-toggle="default-modal"
      className="lmj-plant-item align-start bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <span className="lmj-plant-item-price">{price}€</span>
      <img
        className="lmj-plant-item-cover rounded-t-lg"
        src={cover}
        alt={`${name} image`}
      />
      <div className="flex-column m-auto px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div>
          <CareScale scaleValue={water} careType={"water"} />
          <CareScale scaleValue={light} careType={"light"} />
        </div>
      </div>
    </li>
  );
};

export default PlantItem;
