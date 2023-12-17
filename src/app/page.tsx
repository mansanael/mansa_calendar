import Image from "next/image";
import Form from "./form";
import Header from "./header";
import { TASKS } from "./Task/model";
import TaskListElement from "./Task/task_list_element";

export default function Home() {
  // List of tasks

  return (
    <main>
      <Header></Header>

      <Form></Form>

      <ul>
        {TASKS.map((task) => {
          return TaskListElement(task);
        })}
      </ul>
    </main>
  );
}
