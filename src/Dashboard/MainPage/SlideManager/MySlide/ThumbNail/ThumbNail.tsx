const PREFIX = "_thb-fj-54";
import "./thumbnail.module.css";
export default function ThumbNail() {
  return (
    <div className="thumbnail" prefix={PREFIX}>
      <span className="material-icons md-48">image</span>

      <div className="thumbnail-stack-number" prefix={PREFIX}>
        <span>#3</span>
      </div>
    </div>
  );
}
