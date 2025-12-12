import * as actions from "@/actions";
import Button from "../button/Button";
import Form from "../form/Form";
import Input from "../input/Input";
import { useTranslations } from "next-intl";


const AddTodo = () => {
  const t = useTranslations('AddTodo');
  return (
    <div>
      <Form action={actions.createTodo}>
        <div className="flex gap-6 items-center">
          <Input name="input" type="text" placeholder={t("placeholder")} />
          <Button type="submit" text={t("button")} bgColor="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;