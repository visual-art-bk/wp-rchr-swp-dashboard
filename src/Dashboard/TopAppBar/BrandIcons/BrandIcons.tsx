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
  const makeUrl = (pathname: string) => {
    const { origin } = window.location;
    return origin + "/" + pathname;
  };

  return (
    <div className="icon">
      <img
        src={makeUrl(
          "wp-content/plugins/wp-rchr-swiper/assets/img/rchr_wordpress_plugin_icon.png"
        )}
        alt="Website Logo" width="36" height="36"
      ></img>
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
