"use client";
import router from "next/router";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export default function TestPage01() {
  const { status, data, error } = useQuery("todos", fetchTodoList);

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <div>Hello</div>
      <div>It's me</div>
      <div>First Page</div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
