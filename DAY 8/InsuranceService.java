package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InsuranceService {
    private InsuranceRepo insuranceRepository;

    @Autowired
    public InsuranceService(InsuranceRepo insuranceRepository) {
        this.insuranceRepository = insuranceRepository;
    }

    public InsuranceModel createInsurance(InsuranceModel insuranceModel) {
        try {
            return insuranceRepository.save(insuranceModel);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}