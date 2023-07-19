package com.example.demo;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
@Service
public class InsuranceService {
	@Autowired
     InsuranceRepository repository;
	
	public List <Insurance> getList()
	{
		return repository.findAll();
	}
	public Optional<Insurance> getInsurance(int id)
	{
		return repository.findById(id);
	}
	public boolean create(Insurance ins)
	 {
	 return repository.save(ins)!=null?true:false;
	 }
	public String updateDetails(Insurance stu)
	{
		repository.save(stu);
		return "updated";
	}
	public String deleteDetails(int id)
	{
		repository.deleteById(id);
		return "Id deleted";
	}
	

}
