package com.screentracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.screentracker.model.Session;
import com.screentracker.model.User;
import java.util.List;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface SessionRepository extends JpaRepository<Session, Long> {
    Optional<Session> findByUser_id(Long user_id);
    Optional<Session> findByApp(String app);
    List<Session> findByUser_idAndStart_timeAfter(
            Long user_id,
            LocalDateTime start_time
    );

}
