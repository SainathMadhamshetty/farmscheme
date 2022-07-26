package com.personal.farmscheme;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository < User, String >{
	

}
