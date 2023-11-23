package io.github.MatheusFSantos.MinuteLog.model.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDateTime;
import java.util.List;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Tags;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import io.github.MatheusFSantos.MinuteLog.model.domain.Users;

@Tags({
	@Tag("respository")
})
@DataJpaTest
public class UsersRepositoryTest {

	@Autowired
	private UsersRepository usersRepository;
	
	@Test
	void findAllTest() {
		List<Users> users = this.usersRepository.findAll();
		assertTrue(users.isEmpty());
	}
	
	@Test
	void findByIdTest() {
		this.usersRepository.save(new Users("teste", "teste@teste.com", "Password1#", LocalDateTime.now(), LocalDateTime.now()));
		Users userQuery = this.usersRepository.findByName("teste").get();
		Users usersList = this.usersRepository.findById(userQuery.getId()).get();
		
		assertEquals(userQuery.getId(), usersList.getId());
	}
	
	@Test
	void saveTest() {
		this.usersRepository.save(new Users("teste", "teste@teste.com", "Password1#", LocalDateTime.now(), LocalDateTime.now()));
		
		List<Users> usersList = this.usersRepository.findAll();
		Users userQuery = this.usersRepository.findByName("teste").get();
		
		assertFalse(usersList.isEmpty());
		assertEquals("teste", userQuery.getName());
	}
	
	@Test
	void deleteTest() {
		this.usersRepository.save(new Users("teste", "teste@teste.com", "Password1#", LocalDateTime.now(), LocalDateTime.now()));
		Users userQuery = this.usersRepository.findByName("teste").get();
		List<Users> beforeDelete = this.usersRepository.findAll();
		this.usersRepository.deleteById(userQuery.getId());
		List<Users> afterDelete = this.usersRepository.findAll();

		assertFalse(beforeDelete.isEmpty());
		assertTrue(afterDelete.isEmpty());
	}
	
}
