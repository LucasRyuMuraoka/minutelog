package io.github.MatheusFSantos.MinuteLog.model.exception.specializations;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;

import io.github.MatheusFSantos.MinuteLog.model.exception.MinuteLogExceptions;

public class MaxLimitReached extends MinuteLogExceptions {
	
	private static final long serialVersionUID = 1L;
	
	public MaxLimitReached(String message, String shortDescription) {
		super(UUID.randomUUID(), message, HttpStatus.BAD_REQUEST, shortDescription, LocalDateTime.now());
	}
	
	public MaxLimitReached(List<String> messages, String shortDescription) {
		super(UUID.randomUUID(), messages, HttpStatus.BAD_REQUEST, shortDescription, LocalDateTime.now());
	}

}
