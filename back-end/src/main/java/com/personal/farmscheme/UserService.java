package com.personal.farmscheme;



public interface UserService {

	User createUser(User user);

	User getUserByEmail(String email);
	
}
