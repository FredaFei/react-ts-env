import * as React from "react";
import * as ReactDOM from "react-dom";
import { Test } from "./components/test";
import * as png from './1.png'

import './styles/common.less'

ReactDOM.render(<div>
    background: la
    <Test compiler="TypeScript" framework="React!!" />
    <div>require <img src={require('./images/1.png')} alt="" width="50" height="50"/></div>
    <div>import <img src={png} alt="" width="50" height="50"/></div>
</div>,
  document.getElementById("root")
);