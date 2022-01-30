import { useState } from "react";
import { useBeforeunload } from "react-beforeunload"; // 새로고침, 뒤로가기 눌렀을 때 경고창 뜨게
import Information from "./container/Information";
import Navigation from "./container/Navigation";
import ChannelSheet from "./container/ChannelSheet";
import "./App.css";
import InputListData from "./data/InputList.json";
import OutputListData from "./data/OutputList.json";
import ConsoleInputListData from "./data/ConsoleInputList.json";
import ConsoleOutputListData from "./data/ConsoleOutputList.json";

function App() {
  useBeforeunload((event) => event.preventDefault()); // 새로고침, 뒤로가기 눌렀을 때 경고창 뜨게
  const [menu, setMenu] = useState(0);
  const [inputList, setInputList] = useState(
    InputListData.inputList.map((element) => element)
  );
  const [outputList, setOutputList] = useState(
    OutputListData.outputList.map((element) => element)
  );
  const [consoleInputList, setConsoleInputList] = useState(
    ConsoleInputListData.consoleInputList.map((element) => element)
  );
  const [consoleOutputList, setConsoleOutputList] = useState(
    ConsoleOutputListData.consoleOutputList.map((element) => element)
  );
  // Json -> state

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
            outputList={outputList}
            setOutputList={setOutputList}
            consoleInputList={consoleInputList}
            setConsoleInputList={setConsoleInputList}
            consoleOutputList={consoleOutputList}
            setConsoleOutputList={setConsoleOutputList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
