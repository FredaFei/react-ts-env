import * as React from "react";
import * as ReactDOM from "react-dom";
import {Test} from "./components/test";
import * as png from './images/1.png'

import './styles/common.less'

ReactDOM.render(<div className="main">
    <header>hello world!!</header>
    <Test compiler="TypeScript" framework="React!!"/>
    <div>require <img src={require('./images/1.png')} alt="" width="60" height="50"/></div>
    <div>import <img src={png} alt="" width="50" height="50"/></div>
    <footer style={{backgroundImage: `url(${png})`}}>goodbye hello world!!</footer>
  </div>,
  document.getElementById("root")
);