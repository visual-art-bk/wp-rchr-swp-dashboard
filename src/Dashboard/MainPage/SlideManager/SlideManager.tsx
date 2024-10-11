const PREFIX = "_slm-jr-54";
import "./slide-manager.module.css";
import SlideSectionLayout from "./SlideSectionLayout/SlideSectionLayout";
import NewSlide from "./NewSlide/NewSlide";
import MySlide from "./MySlide/MySlide";
export default function SlideManager() {
  return (
    <div className="slide-manager" prefix={PREFIX}>
      <SlideSectionLayout>
        <NewSlide></NewSlide>
      </SlideSectionLayout>

      <SlideSectionLayout>
        <MySlide></MySlide>
      </SlideSectionLayout>
    </div>
  );
}
