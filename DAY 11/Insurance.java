package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Insurance {
	@Id
	private int id;
	private String name;
	private int age;
	private String gender;
	private String policytype;
	private long phoneNo;
	public Insurance() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Insurance(int id, String name, int age, String gender, String policytype, long phoneNo) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.policytype = policytype;
		this.phoneNo = phoneNo;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPolicytype() {
		return policytype;
	}
	public void setPolicytype(String policytype) {
		this.policytype = policytype;
	}
	public long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}
	
}
