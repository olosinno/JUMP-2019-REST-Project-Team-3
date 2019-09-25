package com.collabera.three.animalshelter.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Foster
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private String animalName;
	
	private String animalType;
	
	public Integer getId()
	{
		return id;
	}

	public void setId(Integer id)
	{
		this.id = id;
	}

	public String getAnimalName()
	{
		return animalName;
	}

	public void setAnimalName(String animalName)
	{
		this.animalName = animalName;
	}

	public String getAnimalType()
	{
		return animalType;
	}

	public void setAnimalType(String animalType)
	{
		this.animalType = animalType;
	}
}
