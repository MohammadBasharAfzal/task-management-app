// /frontend/src/components/TaskForm.js
import React, { useState } from 'react';
import { createTask } from '../services/apiService';

const TaskForm = ({ onTaskCreated }) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!taskName) return;

        await createTask({ name: taskName });
        onTaskCreated(); // Callback to refresh task list
        setTaskName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task name"
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
