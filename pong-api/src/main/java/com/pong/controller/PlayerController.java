package com.pong.controller;

import java.time.Duration;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pong.domain.Player;
import com.pong.domain.Score;
import com.pong.service.PlayerService;

import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/player")
@Slf4j
@CrossOrigin
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
	
	@DeleteMapping
	public void deleteAllPlayers(){
		log.info("Deleting");
		playerService.deleteAll();
	}
	
	@PostMapping(value="/record/{playerId}")
	public Mono<Player> recordGame(@PathVariable String playerId,@RequestBody Score score){
		return playerService.recordGame(playerId, score);
	}
	
	@GetMapping("/all")
	public List<Player> findAllPlayers(){
		return playerService.findAllPlayers().blockFirst();
	}
}
