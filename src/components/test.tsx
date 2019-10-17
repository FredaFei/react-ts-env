import * as React from "react";
import './test.less'

export interface HelloProps { compiler: string; framework: string; }

export const Test = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;