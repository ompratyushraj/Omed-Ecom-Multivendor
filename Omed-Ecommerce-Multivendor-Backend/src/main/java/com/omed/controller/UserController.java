package com.omed.controller;

import com.omed.model.User;
import com.omed.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users/profile")
    public ResponseEntity<User> createUserHandler(@RequestHeader("Authorization") String jwt) throws Exception{
        User user = userService.findUserByJwtToken(jwt);
        return ResponseEntity.ok(user);
    }

}