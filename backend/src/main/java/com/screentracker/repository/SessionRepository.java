package com.screentracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.screentracker.model.Session;
import com.screentracker.model.User;
import java.util.Optional;

@Repository
public interface SessionRepository extends JpaRepository<Session, Long> {
    Optional<Session> findByUser(User user);
    Optional<Session> findByApp(String app);
}
