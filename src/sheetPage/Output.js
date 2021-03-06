import "../styles/SheetPage.css";

export default function Output(props) {
  const PlusList = (outputList, setOutputList) => {
    const list = outputList.slice();
    list.push({
      outputNo: list.length + 1,
      outputPosition: "",
      outputSpeaker: "",
      outputEA: 0,
    });
    setOutputList(list);
  };

  return (
    <div className={props.menu === 1 ? "show" : "hide"}>
      <div className="plus-button">
        <button
          onClick={() => {
            PlusList(props.outputList, props.setOutputList);
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
      <MapList mapList={props.outputList} />
    </div>
  );
}

const MapList = (props) =>
  props.mapList.map((element) => {
    return <MakeList mapList={element} key={element.outputNo} />;
  });

const MakeList = (props) => {
  return (
    <div className="outputList list-columns">
      <div className="list-rows no">{props.mapList.outputNo}</div>
      <input
        className="list-rows instrument"
        placeholder={props.mapList.outputPosition}
      ></input>
      <input
        className="list-rows mic"
        placeholder={props.mapList.outputSpeaker}
      ></input>
      <input
        className="list-rows etc"
        placeholder={props.mapList.outputEA}
      ></input>
    </div>
  );
};
