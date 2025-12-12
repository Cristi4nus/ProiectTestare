"use client";

import * as actions from "@/actions";
import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";
import { useState } from "react";
import { todoProps } from "@/types";
import { MdEdit } from "react-icons/md";
import { useTranslations } from "next-intl";

const EditTodo = ({ todo }: { todo: todoProps }) => {
  const t = useTranslations("ChangeTodo");
  const [editTodoState, setEditTodoState] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted) {
      return;
    }
    setEditTodoState(!editTodoState);
  };

  const handleSubmit = () => {
    setEditTodoState(false);
  };

  return (
    <div className="flex gap-6 items-center">
      <Button onClick={handleEdit} text={<MdEdit />} actionButton />
      {editTodoState ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden"></Input>
          <div className="flex justify-center gap-4">
            <Input type="text" name="newTitle" placeholder={t("placeholder")} />
            <Button
              type="submit"
              text="save"
              bgColor="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
            ></Button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
