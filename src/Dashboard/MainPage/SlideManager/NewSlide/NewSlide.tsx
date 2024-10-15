import { useEffect, useState } from "react";
import "./new-slide.module.css";
import SubmitModalLayer from "@/Dashboard/Layers/SubmitModalLayer/SubmitModalLayer";
const PREFIX = "_nsl-ke-31";
export default function NewSlide() {
  const [stateIsActiveModal, setStateIsActiveModel] = useState(false);

  const onClick = () => {
    setStateIsActiveModel(true);
  };

  // log
  useEffect(() => {
    console.log("stateIsActiveModal", stateIsActiveModal, "NewSlide");
  }, [stateIsActiveModal]);
  return (
    <>
      <div className="new-slide" prefix={PREFIX}>
        <button
          className="new-slide-link"
          onClick={onClick}
          type="button"
          prefix={PREFIX}
        >
          <Icon></Icon>
          <Title></Title>
        </button>
      </div>

      <SubmitModalLayer
        href="."
        htmlContent="슬라이드 만들기"
        stateIsActive={stateIsActiveModal}
        setStateIsActive={setStateIsActiveModel}
      ></SubmitModalLayer>
    </>
  );
}

function Icon() {
  return (
    <div className="icon material-icons md-40" prefix={PREFIX}>
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
