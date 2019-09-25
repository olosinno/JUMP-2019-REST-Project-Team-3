package com.collabera.three.animalshelter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collabera.three.animalshelter.model.Staff;
import com.collabera.three.animalshelter.repository.StaffRepository;


@Service
public class StaffService {
	
	@Autowired
	private StaffRepository staffRepository;
	
	public StaffService(StaffRepository staffRepository)
	{
		this.staffRepository = staffRepository;
	}
	
	public void addStaff(Integer id, String imagePath, String name, String title) {
		Staff tempStaff = new Staff();
		
		tempStaff.setImagePath(imagePath);
		tempStaff.setName(name);
		tempStaff.setTitle(title);
		
	}
	
	public List<Staff> findAll()
	{
		return staffRepository.findAll();
	}


}
