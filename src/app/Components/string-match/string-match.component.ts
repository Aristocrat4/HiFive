import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-string-match',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './string-match.component.html',
  styleUrl: './string-match.component.scss',
})
export class StringMatchComponent {
  @Input() value1: string = '';
  @Input() value2: string[] = [];

  matchResults: { value: string; percentage: number }[] = [];

  ngOnChanges() {
    this.calculateMatches();
  }

  calculateMatches() {
    this.matchResults = this.value2.map((item) => ({
      value: item,
      percentage: this.calculateMatchPercentage(this.value1, item),
    }));
  }

  calculateMatchPercentage(str1: string, str2: string): number {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    const longerLength = longer.length;

    if (longerLength === 0) {
      return 100;
    }

    const editDistance = this.levenshteinDistance(longer, shorter);
    return (1 - editDistance / longerLength) * 100;
  }

  levenshteinDistance(str1: string, str2: string): number {
    const m = str1.length;
    const n = str2.length;
    const dp: number[][] = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + 1,
            dp[i][j - 1] + 1,
            dp[i - 1][j - 1] + 1
          );
        }
      }
    }

    return dp[m][n];
  }
}
