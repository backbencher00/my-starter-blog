---
title:  N-QUEEN PROBLEM
date: "2020-01-24T22:11:03.214Z"
description: "This Blog is all About the One of the most famous problem of backtracking, often asked in technical interview.
I'll be explaining the variation of N queen in this blog"
---

# Introduction
![chess photo](steve-johnson-XQ9Gpng_hWM-unsplash.jpg)
A video by prateek narang in which he has given a very good explaination about the N-QUEEN problem
[link](https://www.youtube.com/watch?v=jFwREev_yvU)

## N-Queen Problem to print all the possible solution
```CPP
#include<iostream>
using namespace std;

bool canPlace(int board[][10], int n, int x, int y) {

	//Column
	for (int k = 0; k < x; k++) {
		if (board[k][y] == 1) {
			return false;
		}
	}
	//Left Diag
	int i = x, j = y;
	while (i >= 0 and j >= 0) {
		if (board[i][j] == 1) {
			return false;
		}
		i--; j--;
	}

	//Right Diag
	i = x, j = y;
	while (i >= 0 and j < n) {
		if (board[i][j] == 1) {
			return false;
		}
		i--; j++;
	}
	return true;
}



int NQueen(int n, int board[][10], int i) {
	//Base Case
	if (i == n) {
		//Print the board
		/*
		for (int x = 0; x < n; x++) {
			for (int y = 0; y < n; y++) {
			//	cout << board[x][y] << " ";
			}
			cout << endl;
		}
		cout << endl;
		*/

		return 1;
	}
	//Rec Case
	//Try to place queen at every column/position in the current row
	int cnt = 0;

	for (int j = 0; j < n; j++) {
		if (canPlace(board, n, i, j)) {
			board[i][j] = 1;
			cnt += NQueen(n, board, i + 1);
			board[i][j] = 0;
		}
	}
	return cnt;
}

int main() {

	int board[10][10] = {0};
	int n;
	cin >> n;

	cout << NQueen(n, board, 0) << endl;

	return 0;
}
```
## To print the number of possible cases 
```CPP
#include<iostream>
using namespace std;

bool canPlace(int board[][10], int n, int x, int y) {

	//Column
	for (int k = 0; k < x; k++) {
		if (board[k][y] == 1) {
			return false;
		}
	}
	//Left Diag
	int i = x, j = y;
	while (i >= 0 and j >= 0) {
		if (board[i][j] == 1) {
			return false;
		}
		i--; j--;
	}

	//Right Diag
	i = x, j = y;
	while (i >= 0 and j < n) {
		if (board[i][j] == 1) {
			return false;
		}
		i--; j++;
	}
	return true;
}


int NQueen(int n, int board[][10], int i) {
	//Base Case
	if (i == n) {
		//Print the board
		return 1;
	}
	//Rec Case
	//Try to place queen at every column/position in the current row
	int cnt = 0;

	for (int j = 0; j < n; j++) {
		if (canPlace(board, n, i, j)) {
			board[i][j] = 1;
			cnt += NQueen(n, board, i + 1);
			board[i][j] = 0;
		}
	}
	return cnt;
}

int main() {

	int board[10][10] = {0};
	int n;
	cin >> n;

	cout << NQueen(n, board, 0);

	return 0;
}
```
## N-Queen Bitmask
```CPP
#include<iostream>
using namespace std;

int n;
int ans = 0, DONE;

/// More optimisized n queen code !
void solve(int rowMask, int ld, int rd) {

    if (rowMask == DONE) { ans++; return; }

    int safe = DONE & (~(rowMask | ld | rd));
    while (safe) {
        int p = safe & (-safe);
        safe = safe - p;
        solve(rowMask | p, (ld | p) << 1, (rd | p) >> 1);
    }
}


int main()
{
    cin >> n;
    DONE = ((1 << n) - 1);
    solve(0, 0, 0);
    cout << ans << endl;

}
```
## N_Queen_Bitset
```CPP
#include<iostream>
#include<bitset>
using namespace std;

bitset<30> col, d1, d2;

void solve(int r, int n, int &ans) {
    if (r == n) { //print the board array

        ans++; return;
    }

    for (int c = 0; c < n; c++) {
        if ( !col[c] && !d1[r - c + n - 1] && !d2[r + c]) {
            col[c] = d1[r - c + n - 1] = d2[r + c]  = 1;
            solve(r + 1, n, ans);
            col[c] = d1[r - c + n - 1] = d2[r + c]  =  0;
        }
    }
}

int main() {
    int n;
    cin >> n;
    int ans = 0;
    solve(0, n, ans);
    cout << ans << endl;

    return 0;
}
```