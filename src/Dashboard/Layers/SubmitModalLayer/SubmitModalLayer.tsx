import "./submit-modal-layer.module.css";
import { useEffect, useState } from "react";
import Scrim from "./Scrim/Scrim";
const PREFIX = "_lOfModal-df-45";

type tMotalProps = {
  stateIsActive: boolean;
  setStateIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  htmlContent: string;
  href: string;
};
export default function SubmitModalLayer(props: tMotalProps) {
  return (
    <div className="submit-modal-layer-container" prefix={PREFIX}>
      <>
        <Scrim stateIsActive={props.stateIsActive}></Scrim>
        <Modal {...props}></Modal>
      </>
    </div>
  );
}

function Modal(props: tMotalProps) {
  const { href, htmlContent, stateIsActive, setStateIsActive } = props;

  const classNameDefault = "modal-layer";
  const classNameHidden = `--hidden `;
  const classNameShow = `${classNameDefault}--show `;

  return (
    <div
      id="modalLayer"
      className={
        stateIsActive === true
          ? `${classNameDefault} ${classNameShow}`
          : `${classNameDefault} ${classNameHidden}`
      }
      prefix={PREFIX}
    >
      <div className="modal-content" prefix={PREFIX}>
        <CancleBtn setStateIsActive={setStateIsActive}></CancleBtn>

        <a href={href}>
          <button className="slide-create-btn" prefix={PREFIX}>
            {htmlContent}
          </button>
        </a>
      </div>
    </div>
  );
}

function CancleBtn({
  setStateIsActive,
}: {
  setStateIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const onClick = () => {
    setStateIsActive(false);
  };

  return (
    <div
      id="closeModalBtn"
      className="modal-cancle-btn material-icons md-40"
      onClick={onClick}
    >
      <span>cancel</span>
    </div>
  );
}
