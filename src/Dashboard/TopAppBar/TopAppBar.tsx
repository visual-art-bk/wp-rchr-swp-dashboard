import "./top-app-bar.module.css";
import HomeIcons from "./HomeIcons/HomeIcons";
import MoreMenus from "./MoreMenus/MoreMenus";
import ColumnGapper from "./ColumnGapper/ColumnGapper";
export default function TopAppBar() {
  return (
    <div className="top-app-bar" prefix="_topAppbar-dw-31">
      <div className="layout">
        <HomeIcons></HomeIcons>
        <ColumnGapper></ColumnGapper>
        <ColumnGapper></ColumnGapper>
        <MoreMenus></MoreMenus>
      </div>
    </div>
  );
}
