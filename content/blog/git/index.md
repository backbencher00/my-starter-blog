---
title: Git Cheat Sheet
date: "2020-12-10T22:12:03.284Z"
description: "Git is the free and open source distributed version control system that's responsible for everything in github related that happens locally on your computer. The cheat sheet features the most important and commonly used Git commands for easy reference"
---

# Installation & Guis
 with the platform specific installers for Git, GitHub also provides the ease of staying up-to-date with the latest release if the command line tool while providing  a grapical user interface for day-to-day interaction, review, repository synchronization

 - [GitHub for Window](http://windows.github.com)

 - [Github for Mac](http://mac.github.com)

 For Linux and Solaris platforms, the latest release is available on the official Git web site

 - [Git for All platforms](http://git-scm.com)
 
 ## Setup

Configuring users information used across all 
local repositories

set a name that is identifiable for credit when review version history

```javascript
   git config --global user.name ""[firstname lastname]
```

Set an email address that will be associated with each history marker

```javascript
   git config --global user.email ""[firstname lastname]
```

Set automatic command line coloring for Git for ease reviewing

```javascript
   git config --global color.ui auto

```

## Setup & init

Configuring users information, initializing and cloning repositories

Initialize an existing directory from a hosted location via URL

```javascript
   git init

```

Retreave an entire repository from a hosted location via URL

```javascript
   git clon [url]

```

## Stage & Snapshot

Woring with snapshots and the Git stagging area

Show modified files in a working directory, staged for your next commit

```javascript
   git status

```

Add a files as it looks now to your next commit(stage)

```javascript
   git add [file]

```

Unstage a file while retaining the changes  in working directory

```javascript
   git reset [file]
```

Diff of what is changes but not shaged

```javascript
   git diff

```

Diff of what is staged but not yet commited

```javascript
   git diff --staged

```

Commit your staged content as a new commit snapshot

```javascript
    git commit -m "[descriptive message]"

```

## Branch & Merge

Isolating work in branches, changing context, and integrating changes

List your branch.a*will appear next to the currently active branch

```javascript
   git branch

```

create new branch at the current commit

```javascript
   git branch [branch name]

```

Switch to another branch and check it out into your working directory

```javascript
   git checkout

```

Merge the specified branch's history into the current one

```javascript
   git merge [branch]

```

show all commits in the current branch's history
```javascript
   git log

```

## Inspect & compare
Examine logs, diffs and object information

Show the commit on history for the currently active branch

```javascript
   git log

```

Show the commits on branchA that are not on branchB

```javascript
   git log branchB..branchA

```

Show the commit that changed file, even across renames

```javascript
   git log --follow [file]

```

 show the diff of what is in branchA that is not in branchB
```javascript
   git diff branchB...branchA

```

shows any object in Git in human-readable format
```javascript
   git show [SHA]

```

## Tracking path changes
Version file removes and path changes

delete the file form project and stage the removal for commit

```javascript
   git rm [file]

```

Change an existing file path and stage the move

```javascript
   git mv [existing-path][new-branch]

```

show all commit logs with indication of any paths that moves

```javascript
   git log --stat -M

```

## Ignoring Patterns

Preventing unintentional staging or commmiting of files

Save a file with desired pattern as .gitnore with either direct string matches or wild card globs

```javascript
    logs/
    *.notes
    pattern*/
```

system wide ignore pattern for all locals repositories

```javascript
   git config --global core.excludesfile [file]

```

## Share & Update 
Retreaving updates from another repository and updating locals repos

Add a git URL as an alias

```javascript
   git remote add [alias] [url]

```

Fetch down all the branches from that Git remote

```javascript
   git fetch [alias]

```

Merge a remote branch into your current branch to bring it up to date 

```javascript
   git merge [alias]/[branch]

```

Transit local branch commit to the remote repository branch

```javascript
   git push [alias] [branch]

```

Fetch and merge any commits from the tracking remote branch

```javascript
   git pull

```

## Rewrite History

Rewrite branches, updating commit and clearing history

apply any commit of current branch ahead of specified one

```javascript
   git log --stat -M

```

clear stagging area, rewrite working tree from specified commit

```javascript
   git log --stat -M

```

## Temporary commits 

Temporarily store modified, tracked files in order to change branches

save modified and staged changes

```javascript
   git stash

```
list stack-order of  stashed file changes 

```javascript
   git stash list

```

write working from top of stash stack

```javascript
   git stash pop

```

discard the changes from top of stash stack

```javascript
   git stash drop

```
 

