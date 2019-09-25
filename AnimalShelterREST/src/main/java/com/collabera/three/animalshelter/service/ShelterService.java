package com.collabera.three.animalshelter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collabera.three.animalshelter.model.Shelter;
import com.collabera.three.animalshelter.repository.ShelterRepo;

@Service
public class ShelterService {
	@Autowired
	private ShelterRepo shelterRepository;

	public ShelterService(ShelterRepo shelterRepository)
	{
		this.shelterRepository = shelterRepository;
	}
	
	public void addShelter(Integer id, String shelter_name, Integer addressNo, String street, String township, Integer state, Integer ZIP)
	{
		Shelter template = new Shelter();
		
		template.setId(id);
		template.setShelter_name(shelter_name);
		template.setAddressNo(addressNo);
		template.setStreet(street);
		template.setTownship(township);
		template.setState(state);
		template.setZIP(ZIP);
		
		shelterRepository.save(template);
	}
	
	public List<Shelter> findAll()
	{
		return shelterRepository.findAll();
	}
}
