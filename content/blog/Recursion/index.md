---
title: A week with Recursion
date: "2020-12-10T22:12:03.284Z"
description: "I have made a small blog which contain a tutorials, questions for practice, and editorial of every topic in a arranged fashion  so that  you will get arranged content and you dont have to pay for online DSA courses"
---
 PMI (principle of mathematical induction)
    Lets have  a function f(n)
    1 for k==1 (answer is known)
    2 for f(k) we assume it is true;
    3 for (k+1) we prove it is true using above two state
so recursion is base on this perticular principal

## Bookish defination

Function calling itself

## Recursion in real life

 -  1 Base case (It  is a smallest problem of the bigger problem )

 -  2 Assumption / Recursion case (most important)

        In this we break the above problem into smaller subproblem of same type and then assume smaller problem will solve by recursion you need to assume this thing and dont care about how thing are working (matlb bilkul dimaag ni lagana tabhi problem solve hogi) 
       
 -  3 find the answer
     
In simple terms 
 - write the code 
 - then see the answer
 - if it is getting correct then see how it is giving answer :( )
 - dont even try to find how things are working before getting the correct answer
 

## recursive program to print the number in ascending order
```javascript
   void f(int n){

       //base case
       if(n==0){
          return 1;
       }

       // write the recursive expression and assume that it will solve the bigger problem
       f(n-1)

       //solve the problem
       cout<<n;
        

   }
   int main(){
       f(5);
       return 0;
   }

```

Now you getting the correct answer so lets see how our output is coming 
will see in the stack memory 

- first main will load in the memory and then it will call the f(5)

- second f(5) will load the memory and it call f(4)

- third f(4) will load the memory and it will call f(3)

- fourth f(3) will load in the memory and it will call  f(2)

- fifth f(2) will load in the memory and it will call f(1)

- sixth f(1) will load in the memory and it will call f(0)

- now as it will hit the base case it will return to 1 and f(0) will get destroy from the stack 

- then f(1) will return and will print the  1 and f(1) will get destroy) 

- then f(2) will return and will print the 2 and f(2) will get destroy

- then f(3) will return and will print the 3 and f(3) will get destroy

- then f(4) will return and will print the 4 and f(1) will get destroy)

- then f(5) will return and will print the 5 and f(5) will get destroy

- at last main will get destroy

 




