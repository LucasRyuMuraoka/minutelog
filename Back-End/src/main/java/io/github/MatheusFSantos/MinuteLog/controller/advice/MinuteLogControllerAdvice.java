package io.github.MatheusFSantos.MinuteLog.controller.advice;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import io.github.MatheusFSantos.MinuteLog.model.exception.MinuteLogExceptions;
import io.github.MatheusFSantos.MinuteLog.model.exception.DTO.MinuteLogExceptionsDTO;

@RestControllerAdvice
public class MinuteLogControllerAdvice {
	
	@ExceptionHandler(MinuteLogExceptions.class)
	public ResponseEntity<MinuteLogExceptionsDTO> handleMinuteLogExceptions(MinuteLogExceptions minuteLogExceptions) {
		return ResponseEntity.status(minuteLogExceptions.getStatusCode()).body(new MinuteLogExceptionsDTO(minuteLogExceptions));
	}
	
}
