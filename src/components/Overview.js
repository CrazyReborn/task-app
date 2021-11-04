import React from "react";
import { Component } from "react";

class Overview extends Component {
    render() {
        const { tasks } = this.props;
        const { handleDelete } = this.props;
        const { handleEdit } = this.props;
        return (
            <ul>
                {tasks.map((task, index) => {
                    return (
                        <div key={task.id}>
                            <li >{index + 1}. {task.text}</li>
                            {!task.isEditing
                            ? <button onClick={(e) => handleEdit(e, task)}>Edit this task</button>
                            : <form onSubmit={(e) => handleEdit(e, task)}>
                                <input type="text"></input>
                                <input type="submit"></input>
                            </form>
                            }
                            <button onClick={() => handleDelete(task.id)}>Delete this task</button>
                        </div>
                    )

                })}
            </ul>
        )
    }
};

export default Overview