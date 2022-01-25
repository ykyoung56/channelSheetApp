import "../styles/SheetPage.css";

export default function ConsoleIn(props) {
  return <div className={props.menu === 2 ? "show" : "hide"}>Console In</div>;
}
