import Input from "../sheetPage/Input";
import Output from "../sheetPage/Output";
import ConsoleIn from "../sheetPage/ConsoleIn";
import ConsoleOut from "../sheetPage/ConsoleOut";

export default function ChannelSheet(props) {
  return (
    <>
      <Input menu={props.menu} />
      <Output menu={props.menu} />
      <ConsoleIn menu={props.menu} />
      <ConsoleOut menu={props.menu} />
    </>
  );
}
