package io.github.MatheusFSantos.MinuteLog.model.util.validation;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

import io.github.MatheusFSantos.MinuteLog.model.DTO.UsersDTO;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.InvalidFields;

public class UsersValidation {
	
	public static void validate(UsersDTO user) throws InvalidFields {
		List<String> messages = new ArrayList<String>();

		UsersValidation.nameValidation(user.getName(), messages);
		UsersValidation.emailValidation(user.getEmail(), messages);
		UsersValidation.passwordValidation(user.getPassword(), messages);
		
		if(!messages.isEmpty()) {
			throw new InvalidFields(messages, "Invalid Fields");
		}
	}
	
	public static void nameValidation(String name, List<String> messages) {
		String NAME_REGEX = "^[a-zA-Z][a-zA-Z0-9_]{3,45}$";
		Pattern pattern = Pattern.compile(NAME_REGEX);
		Matcher matcher = pattern.matcher(name);
		
		if(matcher.matches() == false || (name.length() < 3 || name.length() > 45 || name == null)) {
			messages.add("The NAME field is invalid, it must have: 3 to 16 characters (upper and lower case) and the end must be a letter.");
		}
	}
	
	public static void emailValidation(String email, List<String> messages) {
		String EMAIL_REGEX = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@" 
		        + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
		Pattern pattern = Pattern.compile(EMAIL_REGEX);
		Matcher matcher = pattern.matcher(email);
		
		if(matcher.matches() == false || (email.length() < 2 || email.length() > 160 || email == null)) {
			messages.add("The E-MAIL field is invalid.");
		}
	}
	
	public static void passwordValidation(String password, List<String> messages) {
		if(password.length() < 3 || password.length() > 60 || password == null) {
			messages.add("The PASSWORD field is invalid, must be 3 to 60 characters long.");
		}
	}
	
}
