package com.pong.domain;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Document
@Getter
@Setter
public class Player {
	
	private String id;
	private String name;
	
	private int totalWins;
	
	private List<Score> scores = new ArrayList<>();

}
