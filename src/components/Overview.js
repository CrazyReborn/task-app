import React from "react";

function Overview(props) {
    const { tasks } = props;
    const { handleDelete } =props;
    const { handleEdit } = props;
    return (
        <ul>
            {tasks.map((task, index) => {
                return (
                    <div key={task.id}>
                        <li >{index+1}. {task.text}</li>
                        <button onClick={(e) => handleEdit(task.id)}>Edit this task</button>
                        <button onClick={() => handleDelete(task.id)}>Delete this task</button>
                    </div>
                )
                    
            })}
        </ul>
    );
};
export default Overview