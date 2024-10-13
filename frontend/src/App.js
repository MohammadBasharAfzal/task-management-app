// /frontend/src/App.js
import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const handleTaskCreated = () => {
        setRefresh((prev) => !prev); // Trigger re-fetching tasks
    };

    return (
        <div>
            <h1>Task Management App</h1>
            <TaskForm onTaskCreated={handleTaskCreated} />
            <TaskList key={refresh} />
        </div>
    );
};

export default App;
