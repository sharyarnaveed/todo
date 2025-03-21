package com.server.server.controller;


import com.server.server.model.TodoModel;
import com.server.server.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
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
                System.out.println(Thetodo);
 Toservice.savedata(Thetodo);
return true;
            }

            @DeleteMapping("/{id}")

    public boolean deletedata(@PathVariable Long id)
            {
Toservice.deletadata(id);
return true;
            }



            @PutMapping("/{id}")

            public TodoModel updateTodo(@PathVariable Long id, @RequestBody TodoModel newEntry) {
                TodoModel oldEntry = Toservice.findbytheid(id)
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Todo not found"));

                // Update only if new values are provided
                if (newEntry.getText() != null) {
                    oldEntry.setText(newEntry.getText());
                }
                oldEntry.setStatus(newEntry.getStatus());

                return Toservice.savedata(oldEntry);  // Persist changes
            }


}
