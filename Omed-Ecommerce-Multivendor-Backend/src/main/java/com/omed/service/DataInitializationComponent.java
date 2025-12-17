package com.omed.service;

import com.omed.domain.USER_ROLE;
import com.omed.model.User;
import com.omed.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializationComponent implements CommandLineRunner {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializationComponent(PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args){
        initializeAdminUser();
    }

    private void initializeAdminUser(){
        String adminUsername = "ritwikraksh@gmail.com";
        if(userRepository.findByEmail(adminUsername)==null){
            User adminUser = new User();
            adminUser.setPassword(passwordEncoder.encode("ritwikraksh02@1234"));
            adminUser.setUsername("ritwikraksh");
            adminUser.setFirstName("ritwik");
            adminUser.setLastName("raksh");
            adminUser.setEmail(adminUsername);
            adminUser.setRole(USER_ROLE.ROLE_ADMIN);

            userRepository.save(adminUser);
        }
    }
}
