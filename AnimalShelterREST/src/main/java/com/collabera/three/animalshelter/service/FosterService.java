package com.collabera.three.animalshelter.service;

import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.collabera.three.animalshelter.model.Foster;
import com.collabera.three.animalshelter.repository.FosterRepository;

@Service
public class FosterService
{	
	@Autowired
	private FosterRepository fosterRepository;

	public FosterService(FosterRepository fosterRepository)
	{
		this.fosterRepository = fosterRepository;
	}
	
	public void addFoster(String name, String animalType, String fosterDescription, LocalDate estimateDate, LocalDate fosterStart)
	{
		Foster tmpFost = new Foster();
		
		tmpFost.setAnimalName(name);
		tmpFost.setAnimalType(animalType);
		tmpFost.setFosterDescription(fosterDescription);
		tmpFost.setEstimatedDateOfBirth(estimateDate);
		tmpFost.setFosterStart(fosterStart);
		
		fosterRepository.save(tmpFost);
	}
	
	public List<Foster> findAll()
	{
		return fosterRepository.findAll();
	}
}
