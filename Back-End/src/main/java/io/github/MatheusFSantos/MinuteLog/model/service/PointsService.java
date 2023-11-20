package io.github.MatheusFSantos.MinuteLog.model.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.github.MatheusFSantos.MinuteLog.model.DTO.PointsDTO;
import io.github.MatheusFSantos.MinuteLog.model.domain.Points;
import io.github.MatheusFSantos.MinuteLog.model.domain.Users;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.MaxLimitReached;
import io.github.MatheusFSantos.MinuteLog.model.exception.specializations.UserNotFound;
import io.github.MatheusFSantos.MinuteLog.model.repository.PointsRepository;

@Service
public class PointsService {
	
	@Autowired
	private PointsRepository pointsRepository;
	
	@Autowired
	private UsersService usersService;
	
	public List<PointsDTO> findByUserId(UUID userId) throws UserNotFound {
		Users user = this.usersService.findById(userId);
		
		if(user != null) {
			List<PointsDTO> pointsDTOList = new ArrayList<PointsDTO>();
			
			for(Points point : user.getPoints()) {
				pointsDTOList.add(new PointsDTO(point.getDate(), point.getFirstPoint(), point.getSecondPoint(), point.getThirdPoint(), point.getFourthPoint()));
			}
			
			return pointsDTOList;
		}
		
		return null;
	}
	
	public void createANewPoint(UUID userId) throws UserNotFound, MaxLimitReached {
		Users user = this.usersService.findById(userId);
		
		if(user != null)
			if(user.getPoints() != null) {
				List<Points > pointList = user.getPoints();
				
				if(pointList.isEmpty()) {
					this.pointsRepository.save(new Points(LocalDate.now(), LocalTime.now(), user));
				} else {
					Points point = pointList.get(pointList.size() - 1);
					
					if(point.getDate().isBefore(LocalDate.now())) {
						this.pointsRepository.save(new Points(LocalDate.now(), LocalTime.now(), user));
					} else {
						if(point.getSecondPoint() == null) {
							point.updateSecondPoint(LocalTime.now());
							this.pointsRepository.save(point);
						} else if(point.getThirdPoint() == null) {
							point.updateThirdPoint(LocalTime.now());
							this.pointsRepository.save(point);
						} else if(point.getFourthPoint() == null) {
							point.updateFourthPoint(LocalTime.now());
							this.pointsRepository.save(point);
						} else
							throw new MaxLimitReached("Maximum daily limit reached", "The maximum daily points limit has been reached, wait until tomorrow to be able to register new points!");
					}
				}
			}
	}
}
