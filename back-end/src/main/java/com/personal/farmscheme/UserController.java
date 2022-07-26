package com.personal.farmscheme;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	private UserService userService;
	private UserRepository userRepo;

	
	@PostMapping("/register")
    public ResponseEntity < User > createUser(@RequestBody User user) {
        return ResponseEntity.ok().body(this.userService.createUser(user));
    }
	
	@GetMapping("/login/{email}")
	public ResponseEntity<User> getUserByEmail(@PathVariable String email){
	  return ResponseEntity.ok().body(userService.getUserByEmail(email));
	}
	
	
	
	
    }
	 
	 
