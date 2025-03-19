package com.server.server.controller;


import com.server.server.model.TodoModel;
import com.server.server.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    private TodoService Toservice;

            @GetMapping("/")
    public List<TodoModel> getdata()
            {
return Toservice.getdata();
            }


            @PostMapping("/")
    public boolean savedata(@RequestBody TodoModel Thetodo)
            {
 Toservice.savedata(Thetodo);
return true;
            }

            @DeleteMapping("/{id}")

    public boolean deletedata(@PathVariable Long id)
            {
Toservice.deletadata(id);
return true;
            }


}
