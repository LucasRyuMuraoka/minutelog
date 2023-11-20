package io.github.MatheusFSantos.MinuteLog.model.exception.specializations;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;

import io.github.MatheusFSantos.MinuteLog.model.exception.MinuteLogExceptions;

public class UserAlreadyExist extends MinuteLogExceptions {
	
	private static final long serialVersionUID = 1L;
	
	public UserAlreadyExist(String message, String shortDescription) {
		super(UUID.randomUUID(), message, HttpStatus.CONFLICT, shortDescription, LocalDateTime.now());
	}
	
	public UserAlreadyExist(List<String> messages, String shortDescription) {
		super(UUID.randomUUID(), messages, HttpStatus.CONFLICT, shortDescription, LocalDateTime.now());
	}

}
