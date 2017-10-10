package com.pong.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import com.pong.domain.Player;

import reactor.core.publisher.Flux;

public interface PlayerRepository extends ReactiveCrudRepository<Player, String>{
	
	public Flux<Player> findAllPlayersByOrderByTotalWinsDesc();

}
