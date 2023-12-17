// Model for a Task
export class Task {
    id: number;
    name: string;
    description: string;
    status: string;
    priority: string;
    dueDate: string;
    createDate: string;
    updateDate: string;

    constructor(id: number, name: string, description: string, status: string, priority: string, dueDate: string, createDate: string, updateDate: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.priority = priority;
        this.dueDate = dueDate;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }
}

// enum for Task Status

export enum Status {
    NEW = 'NEW',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

// enum for Task Priority

export enum Priority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}

// Initialise an Array of Tasks

export var TASKS: Task[] = [
    new Task(1, 'Task 1', 'Task 1 Description', Status.NEW, Priority.LOW, '2018-01-01', '2018-01-01', '2018-01-01'),
    new Task(2, 'Task 2', 'Task 2 Description', Status.IN_PROGRESS, Priority.MEDIUM, '2018-01-01', '2018-01-01', '2018-01-01'),
    new Task(3, 'Task 3', 'Task 3 Description', Status.DONE, Priority.HIGH, '2018-01-01', '2018-01-01', '2018-01-01')
];
