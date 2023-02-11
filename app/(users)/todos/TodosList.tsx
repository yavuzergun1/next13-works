import React from "react";
import { Todo } from "../../../typings";
import Link from "next/link";

const fetchTodos = async () => {
  // 1le 5 arasında sayı üretir
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  return todos;
};

async function TodosList() {
  const todos = await fetchTodos();
  // console.log(todos);

  return (
    <div className="flex space-x-5">
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todos/${todo.id}`}>{todo.id}</Link>
        </p>
      ))}
    </div>
  );
}

export default TodosList;
