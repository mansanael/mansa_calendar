import { Task } from "./model";

export default function TaskListElement(props: Task) {
    return (
        <li>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{props.createDate}</p>
            <p>{props.dueDate}</p>
            <p>{props.priority}</p>
            <p>{props.status}</p>
        </li>
    );
}