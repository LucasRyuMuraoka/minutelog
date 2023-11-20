package io.github.MatheusFSantos.MinuteLog.model.exception.specializations;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;

import io.github.MatheusFSantos.MinuteLog.model.exception.MinuteLogExceptions;

public class InvalidFields extends MinuteLogExceptions {
	
	private static final long serialVersionUID = 1L;
	
	public InvalidFields(String message, String shortDescription) {
		super(UUID.randomUUID(), message, HttpStatus.UNPROCESSABLE_ENTITY, shortDescription, LocalDateTime.now());
	}
	
	public InvalidFields(List<String> messages, String shortDescription) {
		super(UUID.randomUUID(), messages, HttpStatus.UNPROCESSABLE_ENTITY, shortDescription, LocalDateTime.now());
	}

}
