import "../styles/SheetPage.css";

export default function ConsoleOutput(props) {
  const PlusList = (consoleOutputList, setConsoleOutputList) => {
    const list = consoleOutputList.slice();
    list.push({
      consoleOutputNo: list.length + 1,
      consoleOutputPosition: "",
      consoleOutputSpeaker: "",
      consoleOutputEA: 0,
    });
    setConsoleOutputList(list);
  };

  return (
    <div className={props.menu === 3 ? "show" : "hide"}>
      <div className="plus-button">
        <button
          onClick={() => {
            PlusList(props.consoleOutputList, props.setConsoleOutputList);
          }}
        >
          +
        </button>
      </div>
      <div className="outputList list-columns list-name">
        <div className="list-rows no">No.</div>
        <span className="list-rows position">Position</span>
        <span className="list-rows speaker">Speaker</span>
        <span className="list-rows ea">EA</span>
      </div>
      <MapList mapList={props.consoleOutputList} />
    </div>
  );
}

const MapList = (props) =>
  props.mapList.map((element) => {
    return <MakeList mapList={element} key={element.consoleOutputNo} />;
  });

const MakeList = (props) => {
  return (
    <div className="outputList list-columns">
      <div className="list-rows no">{props.mapList.consoleOutputNo}</div>
      <input
        className="list-rows instrument"
        placeholder={props.mapList.consoleOutputPosition}
      ></input>
      <input
        className="list-rows mic"
        placeholder={props.mapList.consoleOutputSpeaker}
      ></input>
      <input
        className="list-rows etc"
        placeholder={props.mapList.consoleOutputEA}
      ></input>
    </div>
  );
};
