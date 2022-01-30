import "../styles/SheetPage.css";

export default function ConsoleInput(props) {
  const PlusList = (consoleInputList, setConsoleInputList) => {
    const list = consoleInputList.slice();
    list.push({
      consoleInputNo: list.length + 1,
      consoleInputInstrument: "",
      consoleInputMic: "",
      consoleInputEtc: "",
    });
    setConsoleInputList(list);
  };

  return (
    <div className={props.menu === 2 ? "show" : "hide"}>
      <div className="plus-button">
        <button
          onClick={() => {
            PlusList(props.consoleInputList, props.setConsoleInputList);
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
      <MapList mapList={props.consoleInputList} />
    </div>
  );
}

const MapList = (props) =>
  props.mapList.map((element) => {
    return <MakeList mapList={element} key={element.consoleInputNo} />;
  });

const MakeList = (props) => {
  return (
    <div className="inputList list-columns">
      <div className="list-rows no">{props.mapList.consoleInputNo}</div>
      <input
        className="list-rows instrument"
        placeholder={props.mapList.consoleInputInstrument}
      ></input>
      <input
        className="list-rows mic"
        placeholder={props.mapList.consoleInputMic}
      ></input>
      <input
        className="list-rows etc"
        placeholder={props.mapList.consoleInputEtc}
      ></input>
    </div>
  );
};
