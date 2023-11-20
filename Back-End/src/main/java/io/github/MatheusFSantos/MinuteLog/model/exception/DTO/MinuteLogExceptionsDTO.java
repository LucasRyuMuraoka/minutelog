package io.github.MatheusFSantos.MinuteLog.model.exception.DTO;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonFormat;

import io.github.MatheusFSantos.MinuteLog.model.exception.MinuteLogExceptions;

public class MinuteLogExceptionsDTO implements Serializable {
	
	public static final long serialVersionUID = 1L;
	
	private UUID id;
	private List<String> messages;
	private HttpStatus statusCode;
	private String shortDescription;
	
	@JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
	private LocalDateTime exceptionAt;
	
	public MinuteLogExceptionsDTO(MinuteLogExceptions minuteLogExceptions) {
		this.id = minuteLogExceptions.getId();
		this.messages = minuteLogExceptions.getMessages();
		this.statusCode = minuteLogExceptions.getStatusCode();
		this.shortDescription = minuteLogExceptions.getShortDescription();
		this.exceptionAt = minuteLogExceptions.getExceptionAt();
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
