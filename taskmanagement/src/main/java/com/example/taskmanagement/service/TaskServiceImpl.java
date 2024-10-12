package com.example.taskmanagement.service;

import com.example.taskmanagement.model.Task;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {
    private final List<Task> tasks = new ArrayList<>();

    @Override
    public Task createTask(Task task) {
        tasks.add(task);
        return task;
    }

    @Override
    public List<Task> getAllTasks() {
        return tasks;
    }

    @Override
    public Task updateTask(int id, Task task) {
        // Implement logic to update task based on ID
        return null; // Placeholder
    }

    @Override
    public void deleteTask(int id) {
        // Implement logic to delete task based on ID
    }
}
