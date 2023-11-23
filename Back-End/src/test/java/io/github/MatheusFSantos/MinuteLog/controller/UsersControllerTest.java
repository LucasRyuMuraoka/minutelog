package io.github.MatheusFSantos.MinuteLog.controller;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.apache.http.HttpStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import io.github.MatheusFSantos.MinuteLog.model.DTO.UsersDTO;
import io.github.MatheusFSantos.MinuteLog.model.domain.Users;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.InvalidFields;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.UserAlreadyExist;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.UserNotFound;
import io.github.MatheusFSantos.MinuteLog.model.service.PointsService;
import io.github.MatheusFSantos.MinuteLog.model.service.UsersService;
import io.restassured.http.ContentType;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.*;

@WebMvcTest
public class UsersControllerTest {
	
	@Autowired
	private UsersController usersController;
	
	@MockBean
	private UsersService usersService;
	
	@MockBean
	private PointsService pointsService;
	
	@BeforeEach
	void setup() {
		standaloneSetup(this.usersController);
	}
	
	@Test
	void findAllTest() {
		List<Users> usersList = this.findAllServiceReturn();
		
		when(this.usersService.findAll())
		.thenReturn(usersList);
		
		given()
			.accept(ContentType.JSON)
		.when()
			.get("/api/users")
				.then().statusCode(HttpStatus.SC_OK);
	}
	
	@Test
	void findByIdTest() throws UserNotFound {
		Users user = new Users(UUID.randomUUID(), "teste1", "teste1@teste.com", "Password#1", LocalDateTime.now(), LocalDateTime.now());
	
		when(this.usersService.findById(user.getId())).thenReturn(user);
		given()
			.accept(ContentType.JSON)
		.when()
			.get("/api/users/{id}", user.getId().toString())
				.then().statusCode(HttpStatus.SC_OK);
	}
	
	@Test
	void saveTest() throws UserAlreadyExist, InvalidFields {
		UsersDTO user = new UsersDTO("teste", "teste@teste.com", "Password#1");
		
		doNothing()
			.when(this.usersService).save(user);
		
		given()
			.accept(ContentType.JSON).contentType(ContentType.JSON)
				.body(user)
		.when()
			.post("/api/users")
				.then().statusCode(HttpStatus.SC_CREATED);
	}

	@Test
	void updateTest() throws UserAlreadyExist, InvalidFields, UserNotFound {
		Users oldUser = new Users(UUID.randomUUID(), "teste1", "teste1@teste.com", "Password#1", LocalDateTime.now(), LocalDateTime.now());
		UsersDTO newUser = new UsersDTO("teste", "teste@teste.com", "Password#1");
		
		doNothing().when(this.usersService).update(oldUser.getId(), newUser);
		given()
			.accept(ContentType.JSON).contentType(ContentType.JSON)
				.body(newUser)
		.when()
			.put("/api/users/{id}", oldUser.getId().toString())
				.then().statusCode(HttpStatus.SC_NO_CONTENT);
	}
	
	@Test
	void deleteTest() throws UserAlreadyExist, InvalidFields, UserNotFound {
		Users user = new Users(UUID.randomUUID(), "teste1", "teste1@teste.com", "Password#1", LocalDateTime.now(), LocalDateTime.now());
		
		doNothing().when(this.usersService).delete(user.getId());
		given()
			.accept(ContentType.JSON).contentType(ContentType.JSON)
		.when()
			.delete("/api/users/{id}", user.getId().toString())
				.then().statusCode(HttpStatus.SC_NO_CONTENT);
	}
	
	private List<Users> findAllServiceReturn() {
		List<Users> usersList = new ArrayList<Users>();

		usersList.add(new Users(UUID.randomUUID(), "teste1", "teste1@teste.com", "Password#1", LocalDateTime.now(), LocalDateTime.now()));
		usersList.add(new Users(UUID.randomUUID(), "teste2", "teste2@teste.com", "Password#1", LocalDateTime.now(), LocalDateTime.now()));
		usersList.add(new Users(UUID.randomUUID(), "teste3", "teste3@teste.com", "Password#1", LocalDateTime.now(), LocalDateTime.now()));
		usersList.add(new Users(UUID.randomUUID(), "teste4", "teste4@teste.com", "Password#1", LocalDateTime.now(), LocalDateTime.now()));
		
		return usersList;
	}

}
