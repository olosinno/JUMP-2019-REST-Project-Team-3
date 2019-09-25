package com.collabera.three.animalshelter.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.collabera.three.animalshelter.model.Foster;
import com.collabera.three.animalshelter.repository.FosterRepository;
import com.test.model.Movie;

@Service
public class FosterService
{	
	@Autowired
	private FosterRepository fosterRepository;

	public FosterService(FosterRepository fosterRepository)
	{
		this.fosterRepository = fosterRepository;
	}
	
	public void addFoster(String name, String animalType, String fosterDescription, String estimatedDateOfBirth)
	{
		Foster tmpFost = new Foster();
		
		tmpFost.setAnimalName(name);
		tmpFost.setAnimalType(animalType);
		tmpFost.setFosterDescription(fosterDescription);
		tmpFost.setEstimatedDateOfBirth(LocalDate.parse(estimatedDateOfBirth));
		tmpFost.setFosterStart(LocalDate.now());
		
		fosterRepository.save(tmpFost);
	}
	
	public List<Foster> findAll()
	{
		return fosterRepository.findAll();
	}
	
	public Foster getFosterById(String fosterId)
	{
		
		try
		{
			Optional<Foster> fosterOp = fosterRepository.findById(Integer.parseInt(fosterId));
			
			if(fosterOp.isPresent())
			{
				return fosterOp.get();
			}
			
		}catch(Exception e)
		{
			
		}
		
		return null;
	}
}
