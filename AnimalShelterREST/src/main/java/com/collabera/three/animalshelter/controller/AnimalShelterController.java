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
  
	/* Below is Animal table controller mapping */
	
	/* Above is Animal table controller mapping */
	/* Below is Location table controller mapping */
	@Autowired // will automatically create this object for you on runtime
	AnimalShelterService service;

	@GetMapping("/api/shelterlocation")
	public List<AnimalShelterModel> getShelters() { // Spring Boot handles converting this list to JSON
		return service.getAllShelterLocations();
	}

	@GetMapping("/api/shelterlocation/{shelterlocationid}")
	public AnimalShelterModel getShelter(@PathVariable String shelterid) { // annotation declares use of path variable {shelterid}
		return service.getShelterLocation(Integer.parseInt(shelterid)); // converts from string to an integer before using shelter
	}

	@PostMapping("/api/addshelter")
	public ResponseEntity<String> addShelter(@RequestBody AnimalShelterModel shelter) {  // It is improper to send data through URL for security reasons.
		AnimalShelterModel newShelter = service.addShelter(shelter.getName(), shelter.getAddressNo(), shelter.getStreetName(),
				shelter.getTownship(), shelter.getState(), shelter.getZIP()); // Creates new shelter object and returns it
		System.out.println(newShelter);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}") // Sets up path to grab each new added shelter
				.buildAndExpand(newShelter.getId()).toUri();
		return ResponseEntity.created(location)
				.header("shelter", newShelter.getId() + "")
				.body(newShelter.getName()); // Body will be sent back with confirmation header
	}

	@PutMapping("/api/updateshelter") // Pushes one update to the entire object
	public void updateShelter(@RequestBody AnimalShelterModel shelter) {
		service.updateShelter(shelter);
	}

	@DeleteMapping("/api/deleteshelter/{shelterid}")
	public void removeShelter(@PathVariable int shelterid) {
		service.deleteShelter(shelterid);
	}

	@DeleteMapping("/api/deleteshelter/{shelterid}")
	public void removeShelterss(@PathVariable int shelterid) {
		service.deleteAllShelters();
	}

	/* Above is Location table controller mapping */
	/* Below is Worker table controller mapping */
	
	/* Above is Worker table controller mapping */
	/* Below is Foster table controller mapping */
  
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
