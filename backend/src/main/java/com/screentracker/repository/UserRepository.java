package com.screentracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.screentracker.model.User;
import org.springframework.stereotype.Repository;


import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email); // Spring analyses method name and automatically creates an SQL query
}
