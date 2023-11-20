package io.github.MatheusFSantos.MinuteLog.model.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.MatheusFSantos.MinuteLog.model.domain.Points;

@Repository
public interface PointsRepository extends JpaRepository<Points, UUID>{ }
