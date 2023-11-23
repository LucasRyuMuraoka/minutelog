package io.github.MatheusFSantos.MinuteLog.model.utils.validation;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import io.github.MatheusFSantos.MinuteLog.model.util.validation.UsersValidation;

@SpringBootTest
public class UsersValidationTest {
	
	@Test
	void nameValidationTest() {
		String nameLessThan3 = "rn";
		String nameBiggerThan45 = "supercalifragilisticexpialidocious_username123";
		String nameWithoutFirstString = "1math";
		String nameWithSpecialCharacter = "math123#";
		String validName = "Random1_ddd";
		
		UsersValidationTest.testInvalidName(nameLessThan3);
		UsersValidationTest.testInvalidName(nameBiggerThan45);
		UsersValidationTest.testInvalidName(nameWithoutFirstString);
		UsersValidationTest.testInvalidName(nameWithSpecialCharacter);
		
		UsersValidationTest.testValidName(validName);
	}
	
	@Test
	void emailValidationTest() {
		String emailWithoutDomain = "user@.com";
		String emailWithoutExtension = "user@domain";
		String emailWithHifenOnDomain = "user@domai_n.com";
		String emailWithInvalidCharacterOnDomain = "user@doma@in.com";
		
		String validEmail = "user-name@domain.com.in";
		
		UsersValidationTest.testInvalidEmail(emailWithoutDomain);
		UsersValidationTest.testInvalidEmail(emailWithoutExtension);
		UsersValidationTest.testInvalidEmail(emailWithHifenOnDomain);
		UsersValidationTest.testInvalidEmail(emailWithInvalidCharacterOnDomain);
		
		UsersValidationTest.testValidEmail(validEmail);
	}
	
	@Test
	void passwordValidationTest() {
		String passwordLessThan2 = "Pa";	
		String passwordBiggerThan65 = "aB3$gH8*2fqLsRnD5!oPpIuY7jKl9QwX0zVmEcAxZyT6aB3$gH8*2fqLsRnD5!oPpIuY7jKl9QwX0zVmEcAxZyT6";
		String validPassword = "P@ssword1";

		UsersValidationTest.testInvalidPassword(passwordLessThan2);
		UsersValidationTest.testInvalidPassword(passwordBiggerThan65);
		UsersValidationTest.testValidPassword(validPassword);
	}
	
	private static void testInvalidName(String name) {
		List<String> messages = new ArrayList<String>();
		UsersValidation.nameValidation(name, messages);
		
		assertFalse(messages.isEmpty());
	}
	
	private static void testValidName(String name) {
		List<String> messages = new ArrayList<String>();
		UsersValidation.nameValidation(name, messages);
		assertTrue(messages.isEmpty());
	}
	
	private static void testInvalidEmail(String email) {
		List<String> messages = new ArrayList<String>();
		UsersValidation.emailValidation(email, messages);
		
		assertFalse(messages.isEmpty());
	}
	
	private static void testValidEmail(String email) {
		List<String> messages = new ArrayList<String>();
		UsersValidation.emailValidation(email, messages);
		
		assertTrue(messages.isEmpty());
	}
	
	private static void testInvalidPassword(String password) {
		List<String> messages = new ArrayList<String>();
		UsersValidation.passwordValidation(password, messages);
		
		assertFalse(messages.isEmpty());
	}
	
	private static void testValidPassword(String password) {
		List<String> messages = new ArrayList<String>();
		UsersValidation.passwordValidation(password, messages);
		
		assertTrue(messages.isEmpty());
	
	}
	
}
