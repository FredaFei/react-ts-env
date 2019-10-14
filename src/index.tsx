import * as React from "react";
import * as ReactDOM from "react-dom";
import { Test } from "./components/test";
import png from './images/1.png'

import './styles/common.less'

ReactDOM.render(<div>
    <Test compiler="TypeScript" framework="React!!" />
    <h4 className="split" style={{margin:'20px'}}>split line</h4>
    <div><img src={require('./images/1.png')} alt="" width="50" height="50"/></div>
    <div><img src={png} alt="" width="50" height="50"/></div>
    <div><img src="./images/1.png" alt="" width="50" height="50"/></div>
</div>,
  document.getElementById("root")
);