package io.github.MatheusFSantos.MinuteLog.model.domain;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Users implements Serializable {
	private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(length=45, nullable=false)
    private String name;

    @Column(length=160, unique=true, nullable=false)
    private String email;

    @Column(length=60, nullable=false)
    private String password;

    @JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
    @Column(nullable=false)
    private LocalDateTime createdAt;

    @JsonFormat(pattern="dd/MM/yyyy HH:mm:ss")
    @Column(nullable=false)
    private LocalDateTime updatedAt;
    
    @JsonIgnore
    @OneToMany(mappedBy="user", orphanRemoval=true)
    private List<Points> points = new ArrayList<>();

    public Users() { }

    public Users(UUID id, String name, String email, String password, LocalDateTime createdAt, LocalDateTime updatedAt) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
    
    public Users(String name, String email, String password, LocalDateTime createdAt, LocalDateTime updatedAt) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	@Override
	public int hashCode() {
		return Objects.hash(createdAt, email, id, name, password, updatedAt);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Users other = (Users) obj;
		return Objects.equals(createdAt, other.createdAt) && Objects.equals(email, other.email)
				&& Objects.equals(id, other.id) && Objects.equals(name, other.name)
				&& Objects.equals(password, other.password) && Objects.equals(updatedAt, other.updatedAt);
	}

	@Override
	public String toString() {
		return "Users { id: " + id + ", name: " + name + ", email: " + email + ", password: " + password + ", createdAt: "
				+ createdAt + ", updatedAt: " + updatedAt + " }";
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

	public String getName() {
		return name;
	}

	public void updateName(String name) {
		this.setName(name);
	}

	private void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void updateEmail(String email) {
		this.setEmail(email);
	}

	private void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void updatePassword(String password) {
		this.setPassword(password);
	}

	private void setPassword(String password) {
		this.password = password;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void updateCreatedAt(LocalDateTime createdAt) {
		this.setCreatedAt(createdAt);
	}

	private void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void updateUpdatedAt(LocalDateTime updatedAt) {
		this.setUpdatedAt(updatedAt);
	}

	private void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public List<Points> getPoints() {
		return points;
	}

}
