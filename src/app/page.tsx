import AddTodo from "@/components/todos/AddTodo";
import Todo from "@/components/todos/Todo";
import { prisma } from "@/utils/prisma";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "@/components/locale/LocaleSwitcher";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function Home() {
  const t = await getTranslations("Home");
  const data = await getData();

  return (
    <>
      <LocaleSwitcher />
      <div className="w-screen py-20 flex justify-center flex-col items-center">
        <span className="text-4xl font-extrabold uppercase">{t("title")}</span>
        <div className="flex justify-center flex-col items-center">
          <AddTodo />
          <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
            {data.map((todo, id) => (
              <div className="w-full" key={id}>
                <Todo todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
