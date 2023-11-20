package io.github.MatheusFSantos.MinuteLog.model.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.github.MatheusFSantos.MinuteLog.model.DTO.UsersDTO;
import io.github.MatheusFSantos.MinuteLog.model.domain.Users;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.InvalidFields;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.UserAlreadyExist;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.UserNotFound;
import io.github.MatheusFSantos.MinuteLog.model.repository.UsersRepository;
import jakarta.transaction.Transactional;

@Service
public class UsersService {
	
	@Autowired
	private UsersRepository usersRepository;
	
	public List<Users> findAll() {
		return this.usersRepository.findAll();
	}
	
	public Users findById(UUID id) throws UserNotFound {
		Optional<Users> user = this.usersRepository.findById(id);
		
		if(user.isEmpty())
			throw new UserNotFound("User not found in database!", "The method was invoked, however, the user is not in the database.");
		else
			return user.get();
	}
	
	public Users findByName(String name) {
		Optional<Users> user = this.usersRepository.findByName(name);
		return (user.isPresent()) ? user.get() : null;
	}
	
	@Transactional
	public void save(UsersDTO newUser) throws UserAlreadyExist {
		List<Users> usersList = this.findAll();
		
		for(Users user : usersList) {
			if(user.getEmail().equals(newUser.getEmail())) {
				throw new UserAlreadyExist("User already exist in database!", "The method was invoked, but the user is already registered in the database.");
			}
		}
		
		Users newUserReadyToSave = new Users(newUser.getName(), newUser.getEmail(), newUser.getPassword(), LocalDateTime.now(), LocalDateTime.now());		
		this.usersRepository.save(newUserReadyToSave);
	}
	
	@Transactional
	public void update(UUID id, UsersDTO updatedUser) throws UserNotFound, InvalidFields {
		Users oldUser = this.findById(id);
		
		if(oldUser != null) {
			List<Users> usersList = this.findAll();
			
			for(Users user : usersList) {
				if(!user.equals(oldUser) && user.getEmail().equals(updatedUser.getEmail())) {
					throw new InvalidFields("Invalid Fields", "The E-MAIL field is invalid!");
				}
			}
			
			Users userReadyToSave = new Users(oldUser.getId(), updatedUser.getName(), updatedUser.getEmail(), updatedUser.getPassword(), oldUser.getCreatedAt(), LocalDateTime.now());
			this.usersRepository.save(userReadyToSave);
		}
	}
	
	@Transactional
	public void delete(UUID id) throws UserNotFound {
		if(this.findById(id) != null) {
			this.usersRepository.deleteById(id);
		}
	}
	
}
