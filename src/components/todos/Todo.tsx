import { todoProps } from "@/types";

import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  return (
    <div
      style={todoStyle}
      className="w-11/12 mx-auto flex items-center justify-between bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-pink-900/80 backdrop-blur-sm py-6 px-8 rounded-2xl shadow-xl border border-white/10"
    >
      <ChangeTodo todo={todo} />
      <span className="text-center font-semibold uppercase grow text-white text-lg tracking-wide">{todo.title}</span>
      <div className="flex items-center mx-3">
        <EditTodo todo={todo} />
      </div>

      <div className="flex items-center">
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;