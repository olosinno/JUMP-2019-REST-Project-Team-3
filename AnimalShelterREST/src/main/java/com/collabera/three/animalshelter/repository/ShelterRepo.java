package com.collabera.three.animalshelter.repository;

import org.springframework.data.repository.JPARepository;

import com.collabera.three.animalshelter.model.Shelter;

public interface ShelterRepo extends JPARepository<Shelter, Integer> {

}
