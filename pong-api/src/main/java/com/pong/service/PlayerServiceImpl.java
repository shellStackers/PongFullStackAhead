package com.pong.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pong.domain.Player;
import com.pong.repository.PlayerRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@Transactional
public class PlayerServiceImpl implements PlayerService{

	@Autowired
	private PlayerRepository playerRepository;
	
	@Override
	public Mono<Player> savePlayer(Player player) {
		return playerRepository.save(player);
	}

	@Override
	public Flux<Player> findAllPlayersByRank() {
		return playerRepository.findAllPlayersByOrderByTotalWinsDesc();
	}


}
