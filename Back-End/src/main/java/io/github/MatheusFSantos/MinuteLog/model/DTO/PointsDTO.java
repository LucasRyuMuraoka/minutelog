package io.github.MatheusFSantos.MinuteLog.model.DTO;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonFormat;

public class PointsDTO implements Serializable {
	
	public static final long serialVersionUID = 1L;
	
	@JsonFormat(pattern="dd/MM/yyyy")
	private LocalDate date;
	
	@JsonFormat(pattern="HH:mm:ss")
	private LocalTime firstPoint;
	
	@JsonFormat(pattern="HH:mm:ss")
	private LocalTime secondPoint;

	@JsonFormat(pattern="HH:mm:ss")
	private LocalTime thirdPoint;

	@JsonFormat(pattern="HH:mm:ss")
	private LocalTime fourthPoint;
	
	public PointsDTO(LocalDate date, LocalTime firstPoint, LocalTime secondPoint, LocalTime thirdPoint, LocalTime fourthPoint) {
		this.date = date;
		this.firstPoint = firstPoint;
		this.secondPoint = secondPoint;
		this.thirdPoint = thirdPoint;
		this.fourthPoint = fourthPoint;
	}

	@Override
	public int hashCode() {
		return Objects.hash(date, firstPoint, fourthPoint, secondPoint, thirdPoint);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PointsDTO other = (PointsDTO) obj;
		return Objects.equals(date, other.date) && Objects.equals(firstPoint, other.firstPoint)
				&& Objects.equals(fourthPoint, other.fourthPoint) && Objects.equals(secondPoint, other.secondPoint)
				&& Objects.equals(thirdPoint, other.thirdPoint);
	}

	@Override
	public String toString() {
		return "PointsDTO { date: " + date + ", firstPoint: " + firstPoint + ", secondPoint: " + secondPoint
				+ ", thirdPoint: " + thirdPoint + ", fourthPoint: " + fourthPoint + " }";
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getFirstPoint() {
		return firstPoint;
	}

	public void setFirstPoint(LocalTime firstPoint) {
		this.firstPoint = firstPoint;
	}

	public LocalTime getSecondPoint() {
		return secondPoint;
	}

	public void setSecondPoint(LocalTime secondPoint) {
		this.secondPoint = secondPoint;
	}

	public LocalTime getThirdPoint() {
		return thirdPoint;
	}

	public void setThirdPoint(LocalTime thirdPoint) {
		this.thirdPoint = thirdPoint;
	}

	public LocalTime getFourthPoint() {
		return fourthPoint;
	}

	public void setFourthPoint(LocalTime fourthPoint) {
		this.fourthPoint = fourthPoint;
	}
	
}
