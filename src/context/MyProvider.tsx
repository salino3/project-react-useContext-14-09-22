import { useReducer } from "react";
import {todosReducer} from './useReducer';
// import {initialState} from './usandoContext';
import {usandoContext} from './usandoContext'
// import { MODIFY_TODOS, MAKE_TODO } from "./Types";
import { Arr2 } from "./interfaces";


 const initialState: Arr2 = {
   todos: [
     { id: 1, name: "hola" },
     { id: 2, name: "manzana" },
   ],
 };



interface Props {
  children: JSX.Element | JSX.Element[];
}



// Create Provider
export function MyProvider({ children }: Props) {




  // Use reducer
  const [state, dispatch] = useReducer(todosReducer, initialState);

  // Define reducer actions
  function modifyTodos(todos: any) {
    // crear acción 
    const res = todos.push({ id: 3, name: "gato" });
    console.log(todos);
    dispatch({
      type: "MODIFY_TODOS",
      payload: res,
    });
  }

  function makeTodo( item: any) {
    // crear acción ...
const res = [...state.todos, item];
    dispatch({
      type: "MAKE_TODO",
      payload: res.push({ id: new Date(), name: item }),
    });
  }
  return (
    <usandoContext.Provider
      value={{
        state,
        modifyTodos,
        makeTodo,
      }}
    >
      {children}
    </usandoContext.Provider>
  );
}
