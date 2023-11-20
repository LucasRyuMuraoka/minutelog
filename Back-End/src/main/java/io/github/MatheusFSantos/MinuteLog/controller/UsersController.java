package io.github.MatheusFSantos.MinuteLog.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import io.github.MatheusFSantos.MinuteLog.model.DTO.UsersDTO;
import io.github.MatheusFSantos.MinuteLog.model.annotations.controller.UsersControllerAnnotation;
import io.github.MatheusFSantos.MinuteLog.model.domain.Users;
import io.github.MatheusFSantos.MinuteLog.model.exception.MinuteLogExceptions;
import io.github.MatheusFSantos.MinuteLog.model.service.UsersService;

@UsersControllerAnnotation
public class UsersController {
	
	@Autowired
	private UsersService usersService;
	
	@GetMapping
	public ResponseEntity<List<Users>> findAll() {
		return ResponseEntity.status(200).body(this.usersService.findAll());
	}
	
	@GetMapping(path="/{id}")
	public ResponseEntity<Users> findById(@PathVariable(name="id", required=true) UUID id) throws MinuteLogExceptions {
		return ResponseEntity.status(200).body(this.usersService.findById(id));
	}
	
	@PostMapping
	public ResponseEntity<Void> save(@RequestBody(required=true) UsersDTO newUser) throws MinuteLogExceptions {
		this.usersService.save(newUser);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@PutMapping(path="/{id}")
	public ResponseEntity<Void> update(@PathVariable(name="id", required=true) UUID id, @RequestBody(required=true) UsersDTO updatedUser) throws MinuteLogExceptions {
		this.usersService.update(id, updatedUser);
		return ResponseEntity.status(204).build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable(name="id", required=true) UUID id) throws MinuteLogExceptions {
		this.usersService.delete(id);
		return ResponseEntity.status(204).build();
	}
	
}
