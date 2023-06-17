// styles
import "./Item.css";

// images

export default function Item({ color, name, price, src }) {
  return (
    <div className="Item">
      <img src={src} alt="placeholder" />
      <div className="item___details">
        <div className="item___name">
          <h4>{name}</h4>
          <small>{color}</small>
        </div>
        {price && (
          <h5 className="price">
            <span className="naira">N</span>
            {price}
          </h5>
        )}
      </div>
    </div>
  );
}
