import "../styles/SheetPage.css";

export default function Input(props) {
  const PlusList = (inputList, setInputList) => {
    const list = inputList.slice();
    list.push({
      inputNo: list.length + 1,
      inputInstrument: "",
      inputMic: "",
      inputEtc: "",
    });
    setInputList(list);
  };

  return (
    <div className={props.menu === 0 ? "show" : "hide"}>
      <div className="plus-button">
        <button
          onClick={() => {
            PlusList(props.inputList, props.setInputList);
          }}
        >
          +
        </button>
      </div>
      <div className="inputList list-columns list-name">
        <div className="list-rows no">No.</div>
        <span className="list-rows instrument">Instrument</span>
        <span className="list-rows mic">Mic</span>
        <span className="list-rows etc">Etc.</span>
      </div>
      <MapList mapList={props.inputList} />
    </div>
  );
}

const MapList = (props) =>
  props.mapList.map((element) => {
    return <MakeList mapList={element} key={element.inputNo} />;
  });

const MakeList = (props) => {
  return (
    <div className="inputList list-columns">
      <div className="list-rows no">{props.mapList.inputNo}</div>
      <input
        className="list-rows instrument"
        placeholder={props.mapList.inputInstrument}
      ></input>
      <input
        className="list-rows mic"
        placeholder={props.mapList.inputMic}
      ></input>
      <input
        className="list-rows etc"
        placeholder={props.mapList.inputEtc}
      ></input>
    </div>
  );
};
