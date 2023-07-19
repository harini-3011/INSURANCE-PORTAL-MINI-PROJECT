package com.example.demo;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class InsuranceController {
	    @Autowired
		InsuranceService service;
	   
		@GetMapping("/getvalues")
		public List<Insurance>getList()
		{
			return service.getList();
		}
		@GetMapping("/getvalues/{id}")
		
		public Optional<Insurance> getbyid(@PathVariable int id)
		{
			return service.getInsurance(id);
		}
		@PostMapping("/post")
		  public boolean create(@RequestBody Insurance ins)
		  {
			return service.create(ins);
		  }
		@PutMapping("/update")
		public String update(@RequestBody Insurance stu)
		{
			return service.updateDetails(stu);
		}
		@DeleteMapping("/delete/{id}")
		public String delete(@PathVariable int id)
		{
			return service.deleteDetails(id);
		}
		
		

	

}
