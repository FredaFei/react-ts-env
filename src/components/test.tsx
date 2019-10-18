import * as React from "react";
import classes from '../utils/help'
import './test.less'

export interface HelloProps { compiler: string; framework: string; }

export const Test = (props: HelloProps) => (
         <h1 className={`${classes('title')}`}>
           Hello from {props.compiler} and {props.framework}!
         </h1>
       )