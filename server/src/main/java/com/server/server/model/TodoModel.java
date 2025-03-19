package com.server.server.model;


import jakarta.persistence.*;

@Entity
@Table(name = "todosave")
public class TodoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column(name = "text")
    String text;

    @Column(name = "status")
    String status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }



    public TodoModel() {
    }

    public TodoModel(Long id, String text, String status) {
        this.id = id;
        this.text = text;
        this.status = status;
    }





}
