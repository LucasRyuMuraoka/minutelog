package io.github.MatheusFSantos.MinuteLog.model.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.MatheusFSantos.MinuteLog.model.domain.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, UUID> {
	
	Optional<Users> findByName(String name);
	
}
