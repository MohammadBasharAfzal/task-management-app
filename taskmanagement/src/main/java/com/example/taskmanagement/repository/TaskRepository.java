package com.example.taskmanagement.repository;

import com.example.taskmanagement.model.Task;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface TaskRepository {
    List<Task> findAll();
    Optional<Task> findById(Long id);
    void save(Task task);
    void deleteById(Long id);
}

class InMemoryTaskRepository implements TaskRepository {
    private List<Task> tasks = new ArrayList<>();
    private Long currentId = 1L;

    @Override
    public List<Task> findAll() {
        return tasks;
    }

    @Override
    public Optional<Task> findById(Long id) {
        return tasks.stream().filter(task -> task.getId().equals(id)).findFirst();
    }

    @Override
    public void save(Task task) {
        if (task.getId() == null) {
            task.setId(currentId++);
            tasks.add(task);
        } else {
            deleteById(task.getId());
            tasks.add(task);
        }
    }

    @Override
    public void deleteById(Long id) {
        tasks.removeIf(task -> task.getId().equals(id));
    }
}



//package com.example.taskmanagement.repository;
//
//import com.example.taskmanagement.model.Task;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface TaskRepository extends JpaRepository<Task, Long> {
//}