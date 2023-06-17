// styles
import "./Tag.css";

export default function Tag({ number, collection }) {
  return (
    <span className="Tag">
      {number} . {collection}
    </span>
  );
}
