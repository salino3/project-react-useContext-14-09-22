
import React, { createContext } from "react";
import { Arr, Arr2, Elements } from "./interfaces";

export interface myUsandoContext {
  //  initialState: Arr[];

  //x todos: Arr2[];
  modifyTodos: (todos: any) => void;
  makeTodo: (item: any) => void;
  state: Elements;
}


export const usandoContext = createContext<myUsandoContext>({} as myUsandoContext);