package com.anand.user_list.controller;

import com.anand.user_list.model.User;
import com.anand.user_list.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    public User newUser (@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping ("/allusers")
    public List<User> getUsers () {
        return userRepository.findAll();
    }

}
