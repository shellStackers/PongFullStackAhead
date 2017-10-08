package com.pong.controller;

import java.time.Duration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pong.domain.Player;
import com.pong.service.PlayerService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/player")
public class PlayerController {

	@Autowired
	private PlayerService playerService;
	
	@GetMapping(value="/leaderboard",produces = MediaType.TEXT_EVENT_STREAM_VALUE)
	public Flux<Player> findAndRankPlayers(){
		return Flux.interval(Duration.ofSeconds(5)).flatMap(x -> playerService.findAllPlayersByRank());
	}
	
	@PostMapping
	public Mono<Player> savePlayer(@RequestBody Player player){
		return playerService.savePlayer(player);
	}
}
