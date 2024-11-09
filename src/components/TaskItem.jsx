import { useState } from "react";

const TaskItem = ({task, onDelete, onEdit}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);


    const handleDelete = () => {
        onDelete(task.id);
    }

    const handleEdit = () => {
        if(isEditing) {
            onEdit(task.id, editedText);
        }
        setIsEditing(!isEditing);
    }

    const handleSubmit = () => {
        if (editedText.trim() !== '') {
            onEdit(task.id, editedText);
            setIsEditing(false);  // Exit edit mode after submitting
        }
    }


    const handleKeyPress = (e) => {
        if (e.key === 'Enter'){
            handleSubmit();
        }
    }
    return(
        <li className="task-container">
            {isEditing ? (
                <div className="task-container-edit">
                    <input 
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onKeyDown={handleKeyPress}/>
                    <button onClick={handleSubmit}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (<div>
                    <div>{task.text}</div>
                </div>)}
            <div className="buttons">
            <button className="delete btn" onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
            <button className="edint btn" onClick={handleEdit}><i className="fa-solid fa-pen-to-square"></i></button>
            </div>
        </li>
    )
}

export default TaskItem;