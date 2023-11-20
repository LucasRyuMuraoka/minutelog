package io.github.MatheusFSantos.MinuteLog.model.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateFormatter {
	
	public static LocalDateTime getDate(LocalDateTime date) {
        DateTimeFormatter pattern = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String dateString = date.format(pattern);
        return LocalDateTime.parse(dateString, pattern);
	}
	
}
