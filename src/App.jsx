import { Fragment } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <Fragment>
      <div className="flex w-full h-[970px]">
        <LeftSide />
        <RightSide />
      </div>
    </Fragment>
  );
}

export default App;
