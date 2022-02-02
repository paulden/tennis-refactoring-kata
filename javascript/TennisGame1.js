const END_GAME_THRESHOLD = 4;
const POINTS_TO_SCORE = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty',
};

class TennisGame1 {
  constructor(player1Name, player2Name) {
    this.pointsPlayer1 = 0;
    this.pointsPlayer2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName) {
    if (playerName === this.player1Name) {
      this.pointsPlayer1 += 1;
    } else if (playerName === this.player2Name) {
      this.pointsPlayer2 += 1;
    }
  }

  getScore() {
    if (this.pointsPlayer1 === this.pointsPlayer2) {
      return this.getEquality(this.pointsPlayer1);
    }
    if (this.pointsPlayer1 >= END_GAME_THRESHOLD || this.pointsPlayer2 >= END_GAME_THRESHOLD) {
      return this.getEndgame(this.pointsPlayer1, this.pointsPlayer2);
    }
    const scorePlayer1 = POINTS_TO_SCORE[this.pointsPlayer1];
    const scorePlayer2 = POINTS_TO_SCORE[this.pointsPlayer2];
    return `${scorePlayer1}-${scorePlayer2}`;
  }

  getEquality(points) {
    if (points <= 2) {
      return `${POINTS_TO_SCORE[points]}-All`;
    }
    return 'Deuce';
  }

  getEndgame(pointsPlayer1, pointsPlayer2) {
    if (pointsPlayer1 - pointsPlayer2 === 1) {
      return `Advantage ${this.player1Name}`;
    } else if (pointsPlayer2 - pointsPlayer1 === 1) {
      return `Advantage ${this.player2Name}`;
    } else if (pointsPlayer1 - pointsPlayer2 >= 2) {
      return `Win for ${this.player1Name}`;
    }
    return `Win for ${this.player2Name}`;
  }
}

module.exports = TennisGame1;