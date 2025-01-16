package com.sire.goal.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
public class Goal {
    @Id
    @GeneratedValue
    private Integer id;
    private String text;

    @JsonIgnoreProperties("Goal")
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Goal(Integer id, String text) {
        this.id = id;
        this.text = text;
    }

    public Goal(Integer id, String text, User user) {
        this.id = id;
        this.text = text;
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Goal(){}
}
