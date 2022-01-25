import { useState } from "react";
import Information from "./container/Information";
import Navigation from "./container/Navigation";
import ChannelSheet from "./container/ChannelSheet";
import "./App.css";

function App() {
  const [menu, setMenu] = useState(0);
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
          <ChannelSheet menu={menu} />
        </div>
      </div>
    </div>
  );
}

export default App;
