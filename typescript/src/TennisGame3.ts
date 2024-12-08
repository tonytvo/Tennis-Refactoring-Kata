import { TennisGame } from './TennisGame';

export class TennisGame3 implements TennisGame {
  private player2Score: number = 0;
  private player1Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getScore(): string {
    if (this.player1Score < 4 && this.player2Score < 4 && !(this.player1Score + this.player2Score === 6)) {
      const allScoreNames: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      let scoreName = allScoreNames[this.player1Score];
      return (this.player1Score === this.player2Score) ? scoreName + '-All' : scoreName + '-' + allScoreNames[this.player2Score];
    } else {
      if (this.player1Score === this.player2Score)
        return 'Deuce';
      let tennisResult = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;
      return (((this.player1Score - this.player2Score) * (this.player1Score - this.player2Score)) === 1) ? 'Advantage ' + tennisResult : 'Win for ' + tennisResult;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1Score += 1;
    else
      this.player2Score += 1;
  }
}
