import React from "react";
import { Todo } from "../../typings";
import Link from "next/link";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();
  // console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>{todo.id}</Link>
        </p>
      ))}
    </div>
  );
}

export default TodosList;
