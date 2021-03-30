---
title: Bit Masking 
date: "2021-01-07T22:11:03.214Z"
description: "bit masking is really interesting topic it has many tricks and concept that you should know before going to solve any question from bitmasking , this is small recape for bitmasking "
---

[link to a tutorial](https://youtu.be/wEZfc6cPC4w)

## binary operator
- & (and)

- | (or)

- ~ (not)

- ^ (xor)

- >> (right shift)

- << (left shift)
## why bitwise operator 
- bitwi    se operator are  very fast

- everything is in the form is in  bits

- generally consist O(n) complexity

- 
## common bit task

- Get ith Bit
```cpp
    return ((num & (1<<i))!=0);

```
- Set ith Bit
```cpp

    return (num | (1<<i));

```

- Clear ith Bit
```cpp
    int mask = ~(1<<i);
    return (num & mask)

```

- Update ith  bit
```cpp
    int value = bitIs1 ? 1 : 0
    int mask = ~(1<<i);
    return (num & mask) | (value<<i;)

```

## big fact and tricks 

- left shit means multiplying a number by  (a<<b = a*(2^b))

- right shift means dividing   a number by 2 (a>>b = a/(2^b)) 

- last bit of even number is 1 and last bit of a odd number is 0

- n&(n-1) hack, suppose I have a number lets num if we do AND operation with (num-1) it will remove last set bit, you can use it for counting the number of set bit

- XOR swapping :
```cpp
    int a=7;
    int b=5;
    a=a^b;
    b=b^a;
    a=a^b;

```
- print subsequence
```cpp
#include <bits/stdc++.h>
using namespace std;
void filterchar(char *a, int no){
    int i=0;
    while(no>0){
        (no&1)?cout<<a[i]:cout<<" ";
        i++;
        no=no>>1;
    }
    cout<<endl;
}
void    generatethesubset(char *a){
    int n = strlen(a);
    int range = (1<<n)-1;
    for(int i=0;i<=range;i++){
        filterchar(a,i);
    }
}
int main() {
    int n, i;
     char a[100];
     cin>>a;
     generatethesubset(a);

}

```
- 