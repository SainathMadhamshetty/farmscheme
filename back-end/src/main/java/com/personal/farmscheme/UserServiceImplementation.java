package com.personal.farmscheme;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class UserServiceImplementation implements UserService{

	@Autowired
	private UserRepository userRepo;

	@Override
	public User createUser(User user) {
		// TODO Auto-generated method stub
		return userRepo.save(user);
	}
	
	 public User getUserByEmail(String email) {

	        Optional < User > userDB = this.userRepo.findById(email);

	        if (userDB.isPresent()) {
	            return userDB.get();
	        } 
	        else {
	            throw new ResourceNotFoundException("Record not found with email : " + email);
	        }
	    }
	
	 
	
}
