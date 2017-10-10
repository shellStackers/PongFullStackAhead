package com.pong.domain;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(of= {"name"})
public class Player {
	
	@Id
	private String name;
	
	private int totalWins;
	private int totalLosses;
	
	private List<Score> scores = new ArrayList<>();

	
	public void incrementTotalWins() {
		totalWins++;
	}
	
	public void incrementTotalLosses() {
		totalLosses++;
	}
}
