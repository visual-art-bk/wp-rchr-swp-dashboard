import "./new-slide.module.css";

const PREFIX = "_nsl-ke-31";
export default function NewSlide() {
  return (
    <div className="new-slide" prefix={PREFIX}>
      <a className="new-slide-link" prefix={PREFIX}>
        <Icon></Icon>
        <Title></Title>
      </a>
    </div>
  );
}

function Icon() {
  return (
    <div className="icon material-icons md-48" prefix={PREFIX}>
      <span>add_circle</span>
    </div>
  );
}

function Title() {
  return (
    <div className="title" prefix={PREFIX}>
      <span>새 슬라이드</span>
    </div>
  );
}
