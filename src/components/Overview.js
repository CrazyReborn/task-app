import React from "react";

function Overview(props) {
    const { tasks } = props;
    return (
        <ul>
            {tasks.map((task) => {
                return <ul key={task.id}>{task.number}. {task.text}</ul>
            })}
        </ul>
    );
};

export default Overview