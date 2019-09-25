package com.collabera.three.animalshelter.model;

public class Shelter {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String shelter_name;
	private Integer addressNo;
	private String street;
	private String township;
	private Integer state; // make int because 
	private Integer ZIP;

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getShelter_name() {
		return shelter_name;
	}
	public void setShelter_name(String shelter_name) {
		this.shelter_name = shelter_name;
	}
	public Integer getAddressNo() {
		return addressNo;
	}
	public void setAddressNo(Integer addressNo) {
		this.addressNo = addressNo;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getTownship() {
		return township;
	}
	public void setTownship(String township) {
		this.township = township;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public Integer getZIP() {
		return ZIP;
	}
	public void setZIP(Integer zIP) {
		ZIP = zIP;
	}
}
