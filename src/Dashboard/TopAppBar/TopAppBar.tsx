import "./top-app-bar.module.css";
import HomeIcons from "./HomeIcons/HomeIcons";
import MoreMenus from "./MoreMenus/MoreMenus";
import BrandIcons from "./BrandIcons/BrandIcons";
export default function TopAppBar() {
  return (
    <div className="top-app-bar" prefix="_topAppbar-dw-31">
      <div className="layout">
        <HomeIcons></HomeIcons>
        <BrandIcons></BrandIcons>
        <MoreMenus></MoreMenus>
      </div>
    </div>
  );
}
