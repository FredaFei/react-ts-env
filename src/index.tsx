import * as React from "react";
import * as ReactDOM from "react-dom";
import { Test } from "./components/test";
import 'styles/common.less'

ReactDOM.render(<div>
    <Test compiler="TypeScript" framework="React!!" />
</div>,
  document.getElementById("root")
);