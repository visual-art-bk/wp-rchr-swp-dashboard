import "./more-menus.module.css";

export default function MoreMenus() {
  return (
    <div className="more-menus" prefix="_moreMenus-dk-43">
      <Help></Help>
    </div>
  );
}

function Help() {
  return (
    <div className="help-menu">
      <a>
        <span>도움말</span>
      </a>
    </div>
  );
}
