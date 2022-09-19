import React, { useReducer } from "react";
import { Elements } from "./interfaces";
import { MODIFY_TODOS, MAKE_TODO } from "./Types";

export function todosReducer(state: any, action: any) {
  const { payload, type } = action;
  switch (type) {
    case MODIFY_TODOS:
      return {
        ...state,
        todos: [...state.todos, payload], //action.payload,
      };
    case MAKE_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    default:
      return state;
  }
}

