import { Task } from "./model";
import TaskListElement from "./task_list_element";

export default function TaskList(props : Task[]) {
    return (
        <ul>
            {props.map((task) => {
                return (
                    TaskListElement(task)
                );
            })}
        </ul>
    );
}