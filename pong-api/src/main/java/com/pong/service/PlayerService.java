package com.pong.service;

import com.pong.domain.Player;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface PlayerService {
	
	public Mono<Player> savePlayer(Player player);
	public Flux<Player> findAllPlayersByRank();

}
