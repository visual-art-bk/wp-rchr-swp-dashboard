import "./brand-icons.module.css";
export default function BrandIcons() {
  return (
    <div className="brand-icons" prefix="_brandIcons-ek-43">
      <Icon></Icon>
      <Title></Title>
    </div>
  );
}

function Icon() {
  return (
    <div className="icon">
      <span>아이콘</span>
    </div>
  );
}

function Title() {
  return (
    <div className="title">
      <span>뤼초록 스와이퍼</span>
    </div>
  );
}
