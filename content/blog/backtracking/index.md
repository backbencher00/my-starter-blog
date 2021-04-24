---
title: Backtracking
date: "2021-01-07T22:11:03.214Z"
description: "When you go in a house for robbery and you opened lockers to rob, then while return you have to close all the locker so that no one can trace that you theft and this thing is known as backtracking.
In simple word while returning from robbery he will undo all the things!"
---
![photo](ashley-batz-betmVWGYcLY-unsplash.jpg)

## Introduction
This is a brute force approach of problem soling, means you have try out all possible solution and pick desired solution
We use Backtracking when you have multiple solution and you want all those solution 
for example: Suppose you have two boys and one girl and the are three chair  we have to arrange them in three chair how many ways we can arrange them?
answer= n!. Now we want all the solution and here when backtracking comes into play.

We have talked in the recursion blog that how our answer for permutation is getting wrong. 	Because in that problem we are not backtracking. Now here you can see the solution for the permutation.

- Permutation
In this problem you need to print all possible arrangement of a strings.

- Base case : when i becomes 0
- We will have loop to swap the element of a string for  first character
- Recursively call the permutation for smaller problem
- Again swap after doing our work, just to backtrack.

```cpp
#include<bits/stdc++.h>
using namespace std;
void permutation(char *arr, int i)
{
        if(arr[i]=='\0'){
	    cout<<arr<<endl;
        return;
        }
        for(int j=i;arr[j]!='\0';j++){
            swap(arr[j], arr[i]);//we are trying to solve the problem we swap it 
	        permutation(arr, i+1);
            //once we come back we swap it again just to undo the changes because string is passed
			// by reference it will effect all the character in the string
	        swap(arr[i],arr[j]);//undo part so that                you wont catch in the robbery
			                    // this is know as backtracking now it will give the correct answer.
	   }
}
int main(){
	char c[100];
	cin>>c;
	permutation(c, 0);
}
```
## Classic problem in Backtracking
- RateInMaze

This is a classic problem asked in many product based companies in coding interview. It has many variation we are talking here the number of ways a rat can go from (0,0) to (m-1, n-1).
here is a trick if you will make true in 61 lines you will able to print only one solution.

```cpp
#include<bits/stdc++.h>
using namespace std;
bool ratinmaze(char maze[][5],int i,int j, int solution[][4], int n, int m){
	if(i==n-1 && j==m-1){
		solution[i][j]=1;
		for(int k=0;k<n;k++){
			for(int l=0;l<m;l++){
				cout<<solution[k][l]<<" ";
			}
			cout<<endl;
		}
		cout<<endl;
     return false;

	}
   solution[i][j]=1;
   // rercursive case
  if(j+1<m && maze[i][j+1]!='X' ){
        bool forward= ratinmaze(maze,i,j+1, solution, n, m);
		if(forward)return true;
   }
   if(i+1<n && maze[i+1][j] !='X' ){
       bool downward= ratinmaze(maze, i+1, j, solution, n, m);
	   if(downward)return true;
   }
    
   // backtracking case
   solution[i][j]=0;
   return  false;

}
int main() {
 
    char maze[4][5]={"OOOO","OOXX","OOOO","XXOO"};
	 
    int solution[4][4];
	ratinmaze(maze, 0,0,solution, 4,4);
	return 0;
}
```

- Suduko solver

```CPP
#include<bits/stdc++.h>
using namespace std;

bool IsSafe(int suduko[][9], int i, int j, int n,int num){
	for(int k=0;k<n;k++){
		if(suduko[i][j]==num || suduko[k][j]==num)return false;
	}
	
	n=sqrt(n);
	int si=(i/n)*n;
	int sj=(j/n)*n;
	
	for(int i=si; i<si+n;i++){
		for(int j=sj;j<sj+n;j++){
			if(suduko[i][j]==num)return false;
		}
	}
	
	return true;
}
bool SudukoSolver(int suduko[][9], int i, int j, int n){
	if(i==n){
		for(int i=0;i<n;i++){
			for(int j=0;j<n;j++){
				cout<<suduko[i][j]<<" ";
			}
			cout<<endl;
		}
		return true;
	}
	if(j==n)return SudukoSolver(suduko,i+1, 0, n);
	
	if(suduko[i][j]!=0)return SudukoSolver(suduko, i,j+1, n);
	
	for(int num=1;num<=n;num++){
		if(IsSafe(suduko, i, j, num, n)){
			suduko[i][j]=num;
			bool smallproblem=SudukoSolver(suduko, i, j+1, n);
			if(smallproblem)return true;
			suduko[i][j]=0;
		}
	}
	return false;
}
int main(){
	int suduko[9][9]=
	{
	{5,3,0,0,7,0,0,0,0},
	{6,0,0,1,9,5,0,0,0},
	{0,9,8,0,0,0,0,6,0},
	{8,0,0,0,6,0,0,0,3},
	{4,0,0,8,0,3,0,0,1},
	{7,0,0,0,2,0,0,0,6},
	{0,6,0,0,0,0,2,8,0},
	{0,0,0,4,1,9,0,0,5},
	{0,0,0,0,8,0,0,7,9} 
	};
	SudukoSolver( suduko, 0, 0, 9);
}
```

- N-Queen problem 

This problem has many variation and we are not discussing any of here I have made a saperate blog because this is the mostclassic and problem and classic problem including above three.

