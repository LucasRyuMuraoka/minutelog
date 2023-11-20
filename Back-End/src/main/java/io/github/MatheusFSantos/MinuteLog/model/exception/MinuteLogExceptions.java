package io.github.MatheusFSantos.MinuteLog.model.exception;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;

public class MinuteLogExceptions extends Exception {
	
	public static final long serialVersionUID = 1L;
	
	private UUID id;
	private List<String> messages;
	private HttpStatus statusCode;
	private String shortDescription;
	private LocalDateTime exceptionAt;
	
	public MinuteLogExceptions(UUID id, List<String> messages, HttpStatus statusCode, String shortDescription, LocalDateTime exceptionAt) {
		this.id = id;
		this.messages = messages;
		this.statusCode = statusCode;
		this.shortDescription = shortDescription;
		this.exceptionAt = exceptionAt;
	}

	public MinuteLogExceptions(UUID id, String message, HttpStatus statusCode, String shortDescription, LocalDateTime exceptionAt) {
		this.id = id;
		this.messages = Collections.singletonList(message);
		this.statusCode = statusCode;
		this.shortDescription = shortDescription;
		this.exceptionAt = exceptionAt;
	}
	
	@Override
	public String toString() {
		return "MinuteLogExceptions { id: " + id + ", messages: " + messages + ", shortDescription: " + shortDescription
				+ "statusCode: " + statusCode.value() + " -> " + statusCode + ", exceptionAt: " + exceptionAt + " }";
	}
	
	public UUID getId() {
		return id;
	}
	public void setId(UUID id) {
		this.id = id;
	}
	
	public List<String> getMessages() {
		return messages;
	}
	
	public void setMessages(List<String> messages) {
		this.messages = messages;
	}
	
	public HttpStatus getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(HttpStatus statusCode) {
		this.statusCode = statusCode;
	}

	public String getShortDescription() {
		return shortDescription;
	}
	
	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}
	
	public LocalDateTime getExceptionAt() {
		return exceptionAt;
	}
	
	public void setExceptionAt(LocalDateTime exceptionAt) {
		this.exceptionAt = exceptionAt;
	}
	
}
