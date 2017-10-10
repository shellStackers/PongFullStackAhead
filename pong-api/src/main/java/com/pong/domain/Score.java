package com.pong.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Score {
	
	private Result result;
	private String value;
	
	
	public enum Result{
		WIN,LOSS
	}

}
