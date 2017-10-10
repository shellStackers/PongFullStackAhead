package com.pong.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pong.domain.Player;
import com.pong.domain.Score;
import com.pong.repository.PlayerRepository;

import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@Transactional
@Slf4j
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

	@Override
	public Mono<Player> recordGame(String id, Score score) {
		Player player = playerRepository.findById(id).block();
		
		if(score.getResult().equals(Score.Result.WIN)) {
			player.incrementTotalWins();
		}else {
			player.incrementTotalLosses();
		}
		
		player.getScores().add(score);
		
		
		return playerRepository.save(player);
	}

	@Override
	public void deleteAll() {
		log.info("Deleting");
		playerRepository.deleteAll().block();
	}

	@Override
	public Flux<List<Player>> findAllPlayers() {
		return playerRepository.findAll().buffer();
	}


}
