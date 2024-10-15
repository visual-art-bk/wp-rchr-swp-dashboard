import "./scrim.module.css";
type tScrimProps = {
  stateIsActive: boolean;
};
export default function Scrim(props: tScrimProps) {
  const { stateIsActive } = props;
  const classNameDefault = "scrim-layer";
  const classNameHidden = `--hidden`;
  const classNameShow = `${classNameDefault}--show`;

  return (
    <div
      id="scrim"
      className={
        stateIsActive === true
          ? `${classNameDefault} ${classNameShow}`
          : `${classNameDefault} ${classNameHidden}`
      }
    ></div>
  );
}
