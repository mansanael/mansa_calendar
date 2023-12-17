import { TASKS, Task } from "./Task/model";


export default function Form() {

    // This function will be called when the form is submitted


async function addTask(event: FormData) {

    'use server'
    
    TASKS.push(new Task(0,  String(event.get('task')), String(event.get('description')),String(event.get('status')) , String(event.get('priority')) ,String( event.get('start')), String(event.get('end')), String(event.get('created'))));

   
}


    return (
        <form action={addTask}>

            {/* This form will contain allow to add a task, a description, a start date, an end date and a priority leven */}


            <label htmlFor="task">Task</label> <br />
            <input type="text" id="task" name="task" placeholder="Task" /> <br /> <br />

            <label htmlFor="description">Description</label><br />
            <input type="text" id="description" name="description" placeholder="Description" /> <br /> <br />

            <label htmlFor="start">Start Date</label> <br />
            <input type="date" id="start" name="start" /> <br /> <br />

            <label htmlFor="end">End Date</label> <br />
            <input type="date" id="end" name="end" /> <br /> <br />

            <label htmlFor="priority">Priority</label><br />
            <select id="priority" name="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select> <br /> <br />

            <input type="submit" value="Submit" />


        </form>
    );
}

