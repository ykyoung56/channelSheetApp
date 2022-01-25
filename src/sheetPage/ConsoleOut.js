import "../styles/SheetPage.css";

export default function ConsoleOut(props) {
  return <div className={props.menu === 3 ? "show" : "hide"}>Console Out</div>;
}
