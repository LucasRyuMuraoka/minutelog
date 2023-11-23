package io.github.MatheusFSantos.MinuteLog.model.repository;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import io.github.MatheusFSantos.MinuteLog.model.domain.Points;
import io.github.MatheusFSantos.MinuteLog.model.domain.Users;

@DataJpaTest
public class PointsRepositoryTest {

	@Autowired
	private PointsRepository pointsRepository;
	
	@Autowired
	private UsersRepository usersRepository;
	
	@Test
	void findAllTest() {
		List<Points> pointsList = this.pointsRepository.findAll();
		assertTrue(pointsList.isEmpty());
	}
	
	@Test
	void saveTest() {
		this.usersRepository.save(new Users("teste", "teste@teste.com", "Password1#", LocalDateTime.now(), LocalDateTime.now()));
		Users userQuery = this.usersRepository.findByName("teste").get();
		List<Points> beforeAdd = this.pointsRepository.findAll();
		this.pointsRepository.save(new Points(LocalDate.now(), LocalTime.now(), LocalTime.now(), LocalTime.now(), LocalTime.now(), userQuery));
		List<Points> afterAdd = this.pointsRepository.findAll();

		assertTrue(beforeAdd.isEmpty());
		assertFalse(afterAdd.isEmpty());
	}
	
}
