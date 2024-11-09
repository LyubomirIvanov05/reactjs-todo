import TaskItem from "./TaskItem";


export default function TaskList(props) {
    const { tasks, onDelete, onEdit } = props;
    return (

        <ul className="tasks-container">
            {tasks.map((task) => 
                (<TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
}