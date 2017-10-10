package com.pong;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@SpringBootApplication
@EnableReactiveMongoRepositories
public class PongApiApplication {

	public static void main(String[] args) {
	    String ENV_PORT = System.getenv().get("PORT");
	    String ENV_DYNO = System.getenv().get("DYNO");
	    if(ENV_PORT != null && ENV_DYNO != null) {
	        System.getProperties().put("server.port", ENV_PORT);
	    }
		
		SpringApplication.run(PongApiApplication.class, args);
	}
}
