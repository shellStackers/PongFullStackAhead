package com.pong.service;

import com.pong.domain.Player;
import com.pong.domain.Score;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface PlayerService {
	
	public Mono<Player> savePlayer(Player player);
	public Flux<Player> findAllPlayersByRank();
	public Mono<Player> recordGame(String id, Score score);
	public void deleteAll();

}
