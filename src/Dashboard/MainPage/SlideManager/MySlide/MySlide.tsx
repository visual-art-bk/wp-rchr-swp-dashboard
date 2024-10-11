import "./my-slide.module.css";
const PREFIX = "_mySl-fj-54";
import ThumbNail from "./ThumbNail/ThumbNail";

export default function MySlide() {
  return (
    <div className="my-slide" prefix={PREFIX}>
      <a className="my-slide-link" prefix={PREFIX}>
        <ThumbNail></ThumbNail>
        <SlindeName></SlindeName>
      </a>
    </div>
  );
}

function SlindeName() {
  return (
    <div className="slide-name" prefix={PREFIX}>
      <span>내 슬라이드</span>
    </div>
  );
}
