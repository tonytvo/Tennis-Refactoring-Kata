import {TennisGame} from './TennisGame';

export class TennisGame6 implements TennisGame {
  private player2Name : string;
  private player1Name : string;
  private player1Score: number;
  private player2Score: number;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.player1Score = 0;
    this.player2Score = 0;
  }

  getScore(): string {
    let result: string;

    if (this.player1Score == this.player2Score)
    {
      result = this.tieScore();
    }
    else if (this.player1Score >= 4 || this.player2Score >= 4)
    {
      result = this.endGameScore();
    }
    else
    {
      result = this.regularScore();
    }

    return result;

  }

  private tieScore() {
    // tie score
    let tieScore: string;
    switch (this.player1Score) {
      case 0:
        tieScore = "Love-All";
        break;
      case 1:
        tieScore = "Fifteen-All";
        break;
      case 2:
        tieScore = "Thirty-All";
        break;
      default:
        tieScore = "Deuce";
        break;
    }

    return tieScore;
  }

  private regularScore() {
    // regular score
    let score1 = this.playerScoreName(this.player1Score);
    let score2 = this.playerScoreName(this.player2Score);

    return score1 + "-" + score2;
  }

  private playerScoreName(playerScore: number) {
    let scoreName: string;
    switch (playerScore) {
      case 0:
        scoreName = "Love";
        break;
      case 1:
        scoreName = "Fifteen";
        break;
      case 2:
        scoreName = "Thirty";
        break;
      default:
        scoreName = "Forty";
        break;
    }
    return scoreName;
  }

  private endGameScore() {
    // end-game score
    let endGameScore: string;

    if (this.player1Score - this.player2Score == 1) {
      endGameScore = "Advantage " + this.player1Name;
    } else if (this.player1Score - this.player2Score == -1) {
      endGameScore = "Advantage " + this.player2Name;
    } else if (this.player1Score - this.player2Score >= 2) {
      endGameScore = "Win for " + this.player1Name;
    } else {
      endGameScore = "Win for " + this.player2Name;
    }

    return endGameScore;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1Score += 1;
    else
      this.player2Score += 1;
  }
}
