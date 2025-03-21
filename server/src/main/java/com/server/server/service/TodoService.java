package com.server.server.service;


import com.server.server.model.TodoModel;
import com.server.server.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class TodoService {

@Autowired
    private TodoRepository TOreppo;


        public List<TodoModel> getdata()
        {
            return TOreppo.findAll();
        }

        public TodoModel savedata(TodoModel todo)
        {
            return TOreppo.save(todo);
        }


    public void deletadata(Long id) {
        TOreppo.deleteById(id);
    }

    public Optional<TodoModel> findbytheid(Long id)
    {
        return  TOreppo.findById(id);
    }

}
