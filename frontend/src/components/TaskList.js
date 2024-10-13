// /frontend/src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/apiService';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    const handleDelete = async (taskId) => {
        await deleteTask(taskId);
        fetchTasks(); // Refresh task list
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.name}
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
