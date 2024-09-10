import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

const clickHandler = (careType, scaleValue) => {
  let msg = "Cette plante requiert ";

  switch (scaleValue) {
    case 2:
      msg = msg + "modérement ";
      break;
    case 3:
      msg = msg + "beaucoup ";
      break;
    default:
      msg = msg + "peu ";
  }

  if (careType === "water") {
    alert(msg + "d'arrosage");
  } else {
    alert(msg + "de lumière");
  }
};

const CareScale = ({ scaleValue, careType }) => {
  const range = [1, 2, 3];

  const scaleType = careType === "light" ? sun : water;

  return (
    <div onClick={() => clickHandler(careType, scaleValue)}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <img
            style={{ display: "inline-block" }}
            key={rangeElem.toString()}
            src={scaleType}
          ></img>
        ) : null
      )}
    </div>
  );
};

export default CareScale;
