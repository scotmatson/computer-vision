# Github Documentation

## Prerequisites
* Install Git on your local machine
* Have a GitHub account
* Request to be added to the repository as a collaborator (alternatively you may prefer to `fork` the repository).
* Ensure you have cloned the remote repository into a local machine.
* Make sure you have local access to the following branches:
  * master
  * dev
* Set up a local development branch using whichever naming convention works best for you (e.g., sm-test, sm-dev, sm-experimental, etc...)

## Workflow


## Command-Line Cheatsheet
* ```git clone https://github.com/scotmatson/computer-vision.git``` - Will make a local copy of a remote repository. The top-level directory will be named after the repository, in this case `computer-vision`. When cloning from a repository a remote link will be made with the github repository which you cloned and is called `origin`, your default local branch is called `master` by convention.
* ```git remote``` - Displays the alias of all remote repositories.
* ```git status``` - Displays the current state of the local repository. Files will displayed as being one of the following:
  * Untracked - A new file that is not yet part of the current repository
  * Unstaged - An existing file that has been modified but is not `staged` for commit.
  * Staged - A modified file that has been `staged` to be commited to the repository
* ```git add [filename.ext]``` - Will `stage` a specified file for commit.
* ```git add --all :/``` - Will `stage` all modified/untracked files for commit.

## Terminology
* Git - A version control system (VCS) which is ran locally on your machine.
* Github - A cloud hosted VCS based on Git.
* Local - Refers to your `local` git repository
* Remote - Refers to to the `remote` Github repository
* Stage - When a file or files are `staged`, they are able to be commited. A modified file is in either one of two states, staged or unstaged. If a file is not staged, it cannot be commited to the repository.
* Tracking - A file OR change that is tracked is one that has been commited to the repository. Each time a commit is made a new snapshot is taken of the current state of all tracked files.
