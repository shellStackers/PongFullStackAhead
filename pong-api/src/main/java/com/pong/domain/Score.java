package com.pong.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Score {
	
	private String game;
	private Result result;
	private String value;
	
	
	public enum Result{
		WIN,LOSS
	}

}
