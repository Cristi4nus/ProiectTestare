import { todoProps } from "@/types";
import React from "react";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { FaTrash } from "react-icons/fa";

import * as actions from "@/actions";
const DeleteTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id}></Input>
      <Button
        actionButton
        type="submit"
        bgColor="bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600"
        text={<FaTrash />}
      ></Button>
    </Form>
  );
};

export default DeleteTodo;