package io.github.MatheusFSantos.MinuteLog.model.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import io.github.MatheusFSantos.MinuteLog.model.DTO.UsersDTO;
import io.github.MatheusFSantos.MinuteLog.model.domain.Users;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.InvalidFields;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.UserAlreadyExist;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.UserNotFound;

@SpringBootTest
public class UsersServiceTest {

	@Autowired
	private UsersService usersService;
	
	@Test
	void findAllTest() {
		List<Users> usersList = this.usersService.findAll();
		assertTrue(usersList.isEmpty());
	}
	
	@Test
	void findByIdTest() throws UserAlreadyExist, InvalidFields, UserNotFound {
		this.usersService.save(new UsersDTO("Matheus", "matheus@gmail.com", "Password#1"));
		Users userQuery = this.usersService.findByName("Matheus");
		Users userById = this.usersService.findById(userQuery.getId());
		
		this.usersService.delete(userQuery.getId());
		
		assertEquals(userQuery.getName(), userById.getName());
	}
	
	@Test
	void saveTest() throws UserAlreadyExist, InvalidFields, UserNotFound {
		this.usersService.save(new UsersDTO("Matheus", "matheus@gmail.com", "Password#1"));
		Users userQuery = this.usersService.findByName("Matheus");
		Users userById = this.usersService.findById(userQuery.getId());
		
		this.usersService.delete(userQuery.getId());
		
		assertEquals(userQuery.getName(), userById.getName());
	}
	
	@Test
	void deleteTest() throws UserAlreadyExist, InvalidFields, UserNotFound {
		this.usersService.save(new UsersDTO("MatheusF", "matheusf@gmail.com", "Password#1"));
		Users userQuery = this.usersService.findByName("MatheusF");
		this.usersService.delete(userQuery.getId());
		
		List<Users> afterDelete = this.usersService.findAll();
		
		assertEquals(userQuery.getName(), "MatheusF");
		assertTrue(afterDelete.isEmpty());
	}
	
}
