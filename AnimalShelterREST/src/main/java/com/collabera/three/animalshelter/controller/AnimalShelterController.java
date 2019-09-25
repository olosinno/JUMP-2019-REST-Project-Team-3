package com.collabera.three.animalshelter.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.collabera.three.animalshelter.model.Foster;
import com.collabera.three.animalshelter.service.FosterService;

@RestController
@RequestMapping(path = "/animalshelter")
public class AnimalShelterController
{
	/* Below is Animal table controller mapping */
	
	/* Below is Location table controller mapping */
	
	/* Below is Worker table controller mapping */
	
	/* Below is Foster table controller mapping */
	

		@Autowired
		private FosterService fosterService;
  
	  	@PostMapping(path = "/addFoster")
		public @ResponseBody String addNewFoster (@RequestParam String name, 
				@RequestParam String animalType, @RequestParam String description,
				@RequestParam LocalDate fosterStart, @RequestParam LocalDate estimatedDateofBirth)
		{
			return "Saved";
		}
		
		@GetMapping(path = "/allFoster")
		public @ResponseBody Iterable<Foster> getAlFosters()
		{
			return fosterService.findAll();
		}
}
