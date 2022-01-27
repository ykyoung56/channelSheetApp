import { useState } from "react";
import Information from "./container/Information";
import Navigation from "./container/Navigation";
import ChannelSheet from "./container/ChannelSheet";
import "./App.css";

function App() {
  const [menu, setMenu] = useState(0);
  const [inputList, setInputList] = useState([
    {
      inputNo: 1,
      inputInstrument: "Instrument",
      inputMic: "Mic",
      inputEtc: "Etc",
    },
    {
      inputNo: 2,
      inputInstrument: "Instrument2",
      inputMic: "Mic2",
      inputEtc: "Etc2",
    },
  ]);
  const [outputList, setOutputList] = useState([
    {
      outputNo: 1,
      outputPosition: "Position",
      outputSpeaker: "Speaker",
      outputEA: 0,
    },
  ]);
  const [consoleInputList, setConsoleInputList] = useState([
    {
      consoleInputNo: 1,
      consoleInputInstrument: "Instrument",
      consoleInputMic: "Mic",
      consoleInputEtc: "Etc",
    },
  ]);
  const [consoleOutputList, setConsoleOutputList] = useState([
    {
      consoleOutputNo: 1,
      consoleOutputPosition: "Position",
      consoleOutputSpeaker: "Speaker",
      consoleOutputEA: 0,
    },
  ]);
  return (
    <div className="container">
      <div className="app">
        <div className="title">CONSOLE CHANNEL SHEET</div>
        <div className="information">
          <Information />
        </div>
        <div className="navigation">
          <Navigation menu={menu} setMenu={setMenu} />
        </div>
        <div className="channelSheet">
          <ChannelSheet
            menu={menu}
            inputList={inputList}
            setInputList={setInputList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
