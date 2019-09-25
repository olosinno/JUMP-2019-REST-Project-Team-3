package com.collabera.three.animalshelter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.three.animalshelter.model.Foster;
import com.collabera.three.animalshelter.repository.FosterRepository;

@RestController
@RequestMapping(path = "/animalshelter")
public class AnimalShelterController
{
	@Autowired
	
	private FosterRepository fosterRepository;
	
	@PostMapping(path = "/addFoster")
	public @ResponseBody String addNewFoster (@RequestParam String name, @RequestParam String animalType)
	{
		Foster tmpFost = new Foster();
		tmpFost.setAnimalName(name);
		tmpFost.setAnimalType(animalType);
		fosterRepository.save(tmpFost);
		return "Saved";
	}
	
	@GetMapping(path = "/allFoster")
	public @ResponseBody Iterable<Foster> getAlFosters()
	{
		return fosterRepository.findAll();
	}
}
