import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ id, name, cover, light, water }) {
  return (
    <li key={id} className="main__shoppingList__plantList__plantItem">
      <img
        className="main__shoppingList__plantList__plantItem__cover"
        src={cover}
        alt={`${name} cover`}
      />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
