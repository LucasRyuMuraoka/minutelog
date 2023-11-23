package io.github.MatheusFSantos.MinuteLog.controller;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;
import static io.restassured.module.mockmvc.RestAssuredMockMvc.standaloneSetup;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import org.apache.http.HttpStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import io.github.MatheusFSantos.MinuteLog.model.DTO.PointsDTO;
import io.github.MatheusFSantos.MinuteLog.model.domain.Points;
import io.github.MatheusFSantos.MinuteLog.model.domain.Users;
import io.github.MatheusFSantos.MinuteLog.model.exception.MinuteLogExceptions;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.UserNotFound;
import io.github.MatheusFSantos.MinuteLog.model.service.PointsService;
import io.github.MatheusFSantos.MinuteLog.model.service.UsersService;
import io.restassured.http.ContentType;

@WebMvcTest
public class PointsControllerTest {
	
	@Autowired
	private PointController pointsController;
	
	@MockBean
	private UsersService usersService;
	
	@MockBean
	private PointsService pointsService;
	
	@BeforeEach
	void setup() {
		standaloneSetup(this.pointsController);
	}
	
	@Test
	void findAllById() throws UserNotFound {
		Users user = new Users(UUID.randomUUID(), "teste1", "teste1@teste.com", "Password#1", LocalDateTime.now(), LocalDateTime.now());
		List<PointsDTO> pointList = this.findAllPointsServiceReturn(user);
		
		when(this.pointsService.findByUserId(user.getId()))
			.thenReturn(pointList);
		
		given()
			.accept(ContentType.JSON)
		.when()
			.get("/api/points/{id}", user.getId().toString())
				.then().statusCode(HttpStatus.SC_OK);
	}
	
	@Test
	void createANewPointTest() throws MinuteLogExceptions {
		Users user = new Users(UUID.randomUUID(), "teste1", "teste1@teste.com", "Password#1", LocalDateTime.now(), LocalDateTime.now());
		
		doNothing()
			.when(this.pointsService).createANewPoint(user.getId());
		
		given()
			.accept(ContentType.JSON)
				.body(user)
		.when()
			.post("/api/points/{id}", user.getId().toString())
				.then().statusCode(HttpStatus.SC_CREATED);
	}
	
	private List<PointsDTO> findAllPointsServiceReturn(Users user) {
		List<Points> pointsList = new ArrayList<Points>();
		List<PointsDTO> pointsDTOList = new ArrayList<PointsDTO>();
		
		pointsList.add(new Points(UUID.randomUUID(), LocalDate.now(), LocalTime.now(), LocalTime.now(), LocalTime.now(), LocalTime.now(), user));
		
		for(Points point : pointsList) {
			pointsDTOList.add(new PointsDTO(point.getDate(), point.getFirstPoint(), point.getSecondPoint(), point.getThirdPoint(), point.getFourthPoint()));
		}
		
		return pointsDTOList;
	}
	
}
