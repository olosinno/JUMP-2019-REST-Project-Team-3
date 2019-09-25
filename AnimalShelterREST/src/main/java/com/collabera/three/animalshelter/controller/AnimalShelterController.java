package com.collabera.three.animalshelter.controller;

import java.time.LocalDate;

import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.three.animalshelter.model.Animal;
import com.collabera.three.animalshelter.model.Foster;
import com.collabera.three.animalshelter.model.Shelter;
import com.collabera.three.animalshelter.model.Staff;
import com.collabera.three.animalshelter.service.FosterService;
import com.collabera.three.animalshelter.repository.FosterRepository;
import com.collabera.three.animalshelter.repository.ShelterRepo;

import com.collabera.three.animalshelter.service.ShelterService;
import com.collabera.three.animalshelter.service.StaffService;
import com.collabera.three.animalshelter.service.AnimalService;
import com.collabera.three.animalshelter.repository.AnimalRepository;

import com.collabera.three.animalshelter.service.ShelterService;
import com.collabera.three.animalshelter.service.AnimalService;
import com.collabera.three.animalshelter.repository.AnimalRepository;

@RestController
@RequestMapping(path = "/animalshelter")
public class AnimalShelterController
{
	/* Below is Animal table controller mapping */
	 	@Autowired
		private AnimalService animalService;
	 	
	  	@PostMapping(path = "/addAnimal")
		public @ResponseBody String addNewAnimal (@RequestParam String imagePath, 
				@RequestParam String name, @RequestParam String gender,
				@RequestParam String species, @RequestParam String breed, 
				@RequestParam String size, @RequestParam int age)
		{
			return "Saved";
		}
		
		@GetMapping(path = "/allAnimals")
		public @ResponseBody Iterable<Animal> getAllAnimals()
		{
			return animalService.findAll();
		}
	/* Above is Animal table controller mapping */
	/* Below is Location table controller mapping */
	@Autowired // will automatically create this object for you on runtime
	ShelterService service;
	private ShelterRepo shelterRepo;

  	@PostMapping(path = "/addShelter")
	public @ResponseBody String addNewShelter (@RequestParam String imagePath, 
			@RequestParam Integer id, @RequestParam String shelter_name,
			@RequestParam Integer addressNo, @RequestParam String street, 
			@RequestParam String township, @RequestParam String state,
			@RequestParam Integer ZIP)
	{ return "Saved"; }
	@GetMapping(path = "/allShelters")
	public @ResponseBody Iterable<Shelter> getAllShelters()
	{
		return service.findAll();
	}
	/* Above is Location table controller mapping */
	/* Below is Worker table controller mapping */
	@Autowired
	private StaffService staffService;

  	@PostMapping("/addStaff")
	public String addNewStaff (@RequestParam String name, 
			@RequestParam String imagePath, 
			@RequestParam String title)
	{
		return "Saved";
	}
	
	@GetMapping("/allStaff")
	public Iterable<Staff> getAllStaff()
	{
		return staffService.findAll();
	}
	/* Above is Worker table controller mapping */
	/* Below is Foster table controller mapping */
		@Autowired
		private FosterService fosterService;
  
	  	@PostMapping("/addFoster")
		public String addNewFoster (@RequestParam String name, 
				@RequestParam String animalType, @RequestParam String fosterDescription,
				@RequestParam String estimatedDateOfBirth)
		{
	  		fosterService.addFoster(name, animalType, fosterDescription, estimatedDateOfBirth);
			return "Saved";
		}
		
		@GetMapping("/allFoster")
		public Iterable<Foster> getAllFosters()
		{
			return fosterService.findAll();
		}
		
		@GetMapping("/getFoster/{fosterId}")
		public Foster getFosterById(@PathVariable String fosterId)
		{
			return fosterService.getFosterById(fosterId);
		}
		
		@PutMapping("/updateFoster")
		public String updateFoster(@RequestBody Foster foster)
		{
			fosterService.updateFoster(foster);
			return "Updated";
		}
		
		@DeleteMapping("/deleteFoster/{id}")
		public void deleteFoster(@PathVariable String fosterId)
		{
			fosterService.deleteFoster(Integer.parseInt(fosterId));
		}
}