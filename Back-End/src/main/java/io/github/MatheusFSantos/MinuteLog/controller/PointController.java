package io.github.MatheusFSantos.MinuteLog.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import io.github.MatheusFSantos.MinuteLog.model.DTO.PointsDTO;
import io.github.MatheusFSantos.MinuteLog.model.annotations.controller.PointControllerAnnotation;
import io.github.MatheusFSantos.MinuteLog.model.exception.MinuteLogExceptions;
import io.github.MatheusFSantos.MinuteLog.model.service.PointsService;

@PointControllerAnnotation
public class PointController {

	@Autowired
	private PointsService pointsService;
	
	@GetMapping("/{id}")
	public ResponseEntity<List<PointsDTO>> findById(@PathVariable(name="id", required=true) UUID id) throws MinuteLogExceptions {
		return ResponseEntity.status(200).body(this.pointsService.findByUserId(id));
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<Void> createANewPoint(@PathVariable(name="id", required=true) UUID userId) throws MinuteLogExceptions {
		this.pointsService.createANewPoint(userId);
		return ResponseEntity.status(201).build();
	}
	
}
