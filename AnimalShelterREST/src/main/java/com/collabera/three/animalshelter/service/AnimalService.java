package com.collabera.three.animalshelter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collabera.three.animalshelter.model.Animal;
import com.collabera.three.animalshelter.repository.AnimalRepository;

@Service
public class AnimalService {
	
	@Autowired
	private AnimalRepository animalRepository;
	
	public AnimalService(AnimalRepository animalRepository)
	{
		this.animalRepository = animalRepository;
	}
	
	public void addAnimal(Integer id, String imagePath, String name, String gender, String species, String breed, String size, int age) {
		Animal tempAnimal = new Animal();
		
		tempAnimal.setImagePath(imagePath);
		tempAnimal.setName(name);
		tempAnimal.setGender(gender);
		tempAnimal.setSpecies(species);
		tempAnimal.setBreed(breed);
		tempAnimal.setSize(size);
		tempAnimal.setAge(age);
	}
	
	public List<Animal> findAll()
	{
		return animalRepository.findAll();
	}

}
