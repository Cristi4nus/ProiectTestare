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
        <div className="flex gap-4 items-center">
          <Input name="input" type="text" placeholder={t("placeholder")} />
          <Button type="submit" text={t("button")} bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
