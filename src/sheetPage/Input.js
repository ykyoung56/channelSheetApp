import "../styles/SheetPage.css";

export default function Input(props) {
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
        <span className="input-list-rows instrument">Instrument</span>
        <span className="input-list-rows mic">Mic</span>
        <span className="input-list-rows etc">Etc.</span>
      </div>
      <div className="input-list-columns">
        <div className="input-list-rows no">2</div>
        <span className="input-list-rows instrument">Instrument</span>
        <span className="input-list-rows mic">Mic</span>
        <span className="input-list-rows etc">Etc.</span>
      </div>
    </div>
  );
}
