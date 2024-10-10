import "./home-icons.module.css";
export default function HomeIcons() {
  return (
    <div className="home-icons" prefix="_homeIcons-mr-32">
      <Icon></Icon>
      <Title></Title>
    </div>
  );
}

function Icon() {
  return (
    <div className="icon material-icons">
      <span>home</span>
    </div>
  );
}
function Title() {
  return (
    <div className="title">
      <span>대시보드</span>
    </div>
  );
}
