package com.pong;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@SpringBootApplication
@EnableReactiveMongoRepositories
public class PongApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(PongApiApplication.class, args);
	}
}
