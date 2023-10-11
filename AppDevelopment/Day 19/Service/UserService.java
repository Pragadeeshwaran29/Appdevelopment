package com.sandy.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sandy.demo.Entity.Customer;
import com.sandy.demo.Repository.CustomerRepository;

import java.util.List;
import java.util.Optional;

@Service

public class UserService {

	@Autowired
    private  CustomerRepository usersRepository;

    public List<Customer> getAllUsers() {
        return usersRepository.findAll();
    }

    public Customer getUserById(int id) {
        Optional<Customer> userOptional = usersRepository.findById(id);
        return userOptional.orElse(null);
    }

    public Customer createUser(Customer user) {
        return usersRepository.save(user);
    }

    public Customer updateUser(int id, Customer updatedUser) {
        Optional<Customer> existingUserOptional = usersRepository.findById(id);

        if (existingUserOptional.isPresent()) {
        	Customer existingUser = existingUserOptional.get();

            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setRole(updatedUser.getRole());

            return usersRepository.save(existingUser);
        } else {
            return null; 
        }
    }

    public Optional<Customer> findByUsername(String email) {
        return usersRepository.findByEmail(email);
    }
    public void deleteUser(int id) {
        usersRepository.deleteById(id);
    }
}
