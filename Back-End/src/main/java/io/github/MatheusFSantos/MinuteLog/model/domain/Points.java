package io.github.MatheusFSantos.MinuteLog.model.domain;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Points implements Serializable {

	public static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	
	@Column(nullable=false)
	private LocalDate date;

	@Column(nullable=false)
	private LocalTime firstPoint;

	private LocalTime secondPoint;

	private LocalTime thirdPoint;

	private LocalTime fourthPoint;
	
	@ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private Users user;
	
	public Points() { }

	public Points(LocalDate date, Users user) {
		this.date = date;
		this.user = user;
	}
	
	public Points(LocalDate date, LocalTime firstPoint, Users user) {
		this.date = date;
		this.firstPoint = firstPoint;
		this.user = user;
	}

	public Points(LocalDate date, LocalTime firstPoint, LocalTime secondPoint, Users user) {
		this.date = date;
		this.firstPoint = firstPoint;
		this.secondPoint = secondPoint;
		this.user = user;
	}
	
	public Points(LocalDate date, LocalTime firstPoint, LocalTime secondPoint, LocalTime thirdPoint, Users user) {
		this.date = date;
		this.firstPoint = firstPoint;
		this.secondPoint = secondPoint;
		this.thirdPoint = thirdPoint;
		this.user = user;
	}

	public Points(LocalDate date, LocalTime firstPoint, LocalTime secondPoint, LocalTime thirdPoint, LocalTime fourthPoint, Users user) {
		this.date = date;
		this.firstPoint = firstPoint;
		this.secondPoint = secondPoint;
		this.thirdPoint = thirdPoint;
		this.fourthPoint = fourthPoint;
		this.user = user;
	}
	
	public Points(UUID id, LocalDate date, LocalTime firstPoint, LocalTime secondPoint, LocalTime thirdPoint, LocalTime fourthPoint, Users user) {
		this.id = id;
		this.date = date;
		this.firstPoint = firstPoint;
		this.secondPoint = secondPoint;
		this.thirdPoint = thirdPoint;
		this.fourthPoint = fourthPoint;
		this.user = user;
	}

	@Override
	public int hashCode() {
		return Objects.hash(date, firstPoint, fourthPoint, id, secondPoint, thirdPoint);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Points other = (Points) obj;
		return Objects.equals(date, other.date) && Objects.equals(firstPoint, other.firstPoint)
				&& Objects.equals(fourthPoint, other.fourthPoint) && Objects.equals(id, other.id)
				&& Objects.equals(secondPoint, other.secondPoint) && Objects.equals(thirdPoint, other.thirdPoint);
	}

	@Override
	public String toString() {
		return "Points { id: " + id + ", date: " + date + ", firstPoint: " + firstPoint + ", secondPoint: " + secondPoint
				+ ", thirdPoint: " + thirdPoint + ", fourthPoint: " + fourthPoint + ", user: " + user + " }";
	}

	public UUID getId() {
		return id;
	}

	public void updateId(UUID id) {
		this.setId(id);
	}

	private void setId(UUID id) {
		this.id = id;
	}
	

	public LocalDate getDate() {
		return date;
	}

	public void updateDate(LocalDate date) {
		this.setDate(date);
	}

	private void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getFirstPoint() {
		return firstPoint;
	}

	public void updateFirstPoint(LocalTime firstPoint) {
		this.setFirstPoint(firstPoint);
	}

	private void setFirstPoint(LocalTime firstPoint) {
		this.firstPoint = firstPoint;
	}

	public LocalTime getSecondPoint() {
		return secondPoint;
	}

	public void updateSecondPoint(LocalTime secondPoint) {
		this.setSecondPoint(secondPoint);
	}
	
	private void setSecondPoint(LocalTime secondPoint) {
		this.secondPoint = secondPoint;
	}

	public LocalTime getThirdPoint() {
		return thirdPoint;
	}

	public void updateThirdPoint(LocalTime thirdPoint) {
		this.setThirdPoint(thirdPoint);
	}

	private void setThirdPoint(LocalTime thirdPoint) {
		this.thirdPoint = thirdPoint;
	}

	public LocalTime getFourthPoint() {
		return fourthPoint;
	}

	public void updateFourthPoint(LocalTime fourthPoint) {
		this.setFourthPoint(fourthPoint);
	}

	private void setFourthPoint(LocalTime fourthPoint) {
		this.fourthPoint = fourthPoint;
	}

	public Users getUser() {
		return user;
	}

	public void updateUser(Users user) {
		this.setUser(user);;
	}

	private void setUser(Users user) {
		this.user = user;
	}
	
}
