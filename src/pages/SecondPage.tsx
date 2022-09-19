import React, { useContext, useState } from "react";
import { Arr2, Elements } from "../context/interfaces";
import { myUsandoContext, usandoContext } from "../context/usandoContext";

const SecondPage = () => {

  const [valor, setValor] = useState<any >([]);
const [paraLista, setParaLista] = useState<any>([])

  const { state, modifyTodos, makeTodo } =  useContext<myUsandoContext>(usandoContext);
    const { todos } = state;


    const handleClick = () => {
    modifyTodos(todos);
    console.log(todos);
  };

  const handleList = (event: any) => {
    event.preventDefault();
    // setParaLista(event.target.value);
    setValor(event.target.value);

  }
// onSubmit
//* no funciona..
  const onSubmit = (event: any) => {
    event.preventDefault();
    let addToList = event.target.list.value;

    //  setValor(addToList);
      setValor(addToList);
    console.log( valor);
     makeTodo([...valor, valor ]);

  setParaLista([...valor, valor]);
    // console.log([...state.todos, paraLista]);
 setValor('')
  }


  return (
    <>
      <h1 className="mt-5">Second Page</h1>

      <button onClick={handleClick} className="m-2 btn btn-warning">
        añadir otro elemento
      </button>

      {state.todos.map((todo: any, index: any) => (
        <div key={index}>
          <p>
            {todo.id} {todo.name}
          </p>
        </div>
      ))}
      <hr style={{ width: "30em" }} />
      <form onSubmit={onSubmit}>
        <input
          name="list"
          value={valor}
          title="title"
          type="text"
          onChange={handleList}
        />
        <br />
        <button type="submit" className="btn btn-primary  btn-xl m-3">
          Enviar
        </button>
      </form>

      {paraLista.map((item: any, index: any) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ))}
    </>
  );
};

export default SecondPage;



