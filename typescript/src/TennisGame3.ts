import {TennisGame} from './TennisGame';

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
    let isEndGame = !(this.player1Score < 4 && this.player2Score < 4 && !(this.player1Score + this.player2Score === 6));
    if (isEndGame) {
      if (this.player1Score === this.player2Score)
        return 'Deuce';
      let playerName = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;
      let doesPlayerHasAdvantage = ((this.player1Score - this.player2Score) * (this.player1Score - this.player2Score)) === 1;
      return doesPlayerHasAdvantage ? 'Advantage ' + playerName : 'Win for ' + playerName;
    } else {
      const allScoreNames: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      let scoreName = allScoreNames[this.player1Score];
      return (this.player1Score === this.player2Score) ? scoreName + '-All' : scoreName + '-' + allScoreNames[this.player2Score];
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1Score += 1;
    else
      this.player2Score += 1;
  }
}
