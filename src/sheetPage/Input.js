import "../styles/SheetPage.css";

export default function Input(props) {
  return <div className={props.menu === 0 ? "show" : "hide"}>input</div>;
}
