import "../styles/SheetPage.css";

export default function Output(props) {
  return <div className={props.menu === 1 ? "show" : "hide"}>Output</div>;
}
