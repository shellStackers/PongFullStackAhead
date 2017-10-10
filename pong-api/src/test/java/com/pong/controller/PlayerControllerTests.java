package com.pong.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

import com.pong.domain.Player;
import com.pong.domain.Score;
import com.pong.domain.Score.Result;
import com.pong.service.PlayerService;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class PlayerControllerTests {

	@Autowired
	private WebTestClient client;
	
	@Mock
	private PlayerService playerService;
	
	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void testPlayerCreation() throws Exception {
		Player player = Player.builder().name("John").build();
		this.client.post().uri("/player").syncBody(player).exchange()
		.expectStatus().isOk().expectHeader()
				.contentType(MediaType.APPLICATION_JSON_UTF8).expectBody(Player.class).isEqualTo(Player.builder().name("John").build());
	}
	
//	@Test
//	public void testRecordScore() {
//		Score score = Score.builder().result(Result.WIN).value("5").build();
//		
//		this.client.post().uri("/player/record/TOM").syncBody(score).exchange()
//		.expectStatus().isOk().expectHeader()
//				.contentType(MediaType.APPLICATION_JSON_UTF8).expectBody(Player.class).isEqualTo(Player.builder().name("TOM").build());
//		@PostMapping(value="/record/{playerId}")
//		public Mono<Player> recordGame(@PathVariable String playerId,@RequestBody Score score){
//			return playerService.recordGame(playerId, score);
//		}
//	}

}
