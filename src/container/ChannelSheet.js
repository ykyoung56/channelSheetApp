import Input from "../sheetPage/Input";
import Output from "../sheetPage/Output";
import ConsoleInput from "../sheetPage/ConsoleInput";
import ConsoleOutput from "../sheetPage/ConsoleOutput";

export default function ChannelSheet(props) {
  return (
    <>
      <Input
        menu={props.menu}
        inputList={props.inputList}
        setInputList={props.setInputList}
      />
      <Output
        menu={props.menu}
        outputList={props.outputList}
        setOutputList={props.setOutputList}
      />
      <ConsoleInput
        menu={props.menu}
        consoleInputList={props.consoleInputList}
        setConsoleInputList={props.setConsoleInputList}
      />
      <ConsoleOutput
        menu={props.menu}
        consoleOutputList={props.consoleOutputList}
        setConsoleOutputList={props.setConsoleOutputList}
      />
    </>
  );
}
