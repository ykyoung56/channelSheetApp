import "../styles/SheetPage.css";

export default function Input(props) {
  const makeList = props.inputList.map((element) => {
    console.log(element);
    MakeInputList(element);
  });
  return (
    <div className={props.menu === 0 ? "show" : "hide"}>
      <div className="input-list-columns list-name">
        <div className="input-list-rows no">No.</div>
        <span className="input-list-rows instrument">Instrument</span>
        <span className="input-list-rows mic">Mic</span>
        <span className="input-list-rows etc">Etc.</span>
      </div>
      <div className="input-list-columns">
        <div className="input-list-rows no">1</div>
        <input className="input-list-rows instrument"></input>
        <input className="input-list-rows mic"></input>
        <input className="input-list-rows etc"></input>
      </div>
      {console.log(makeList)}
      <div className="plus-button">
        <button>+</button>
      </div>
    </div>
  );
}

const MakeInputList = (props) => {
  console.log("!!!");
  return (
    <div className="input-list-columns">
      <div className="input-list-rows no">{props.inputNo}</div>
      <input
        className="input-list-rows instrument"
        placeholder={props.inputInstrument}
      ></input>
      <input
        className="input-list-rows mic"
        placeholder={props.inputMic}
      ></input>
      <input
        className="input-list-rows etc"
        placeholder={props.inputEtc}
      ></input>
    </div>
  );
};
