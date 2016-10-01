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
### A Few Words on Making Commits
  "Commit Early. Commit Often"
  
  It is important to make note of this saying at the start. This should really be everyones mantra when it comes to working with Git/GitHub as any deviation will often result in poor documentation, poor version control, and more importantly, merge conflicts.
 
  The reasoning behind this will become more apparent as you fully embrace Git, but I'll point a few things out for now that hopefully will make sense.
  
* Your commits should be reflective of incremental development cycles. Each time you `git commit` you should be able to clearly explain in one or two sentences the purpose of the commit, and it should be applicable to each file you have modified. This practice makes it very easy to revert back to older states when problems arise.
* Merge conflicts arise when multiple authors have modified the same file. Generally this only happens when we are not communicating effectively, but also when we are not regularly making commits to the repository OR making too many changes during a development cycle. By focusing on implementing small blocks of rather than large chunks, we naturally will end up commiting to the repository more frequently, giving others a chance to stay in sync and thus reducing the overall number of conflicts.

---

### Branches
Two branches that we use serve a special purpose.

* `master` - This branch represents a production state. It should always host executable code in a final state. The only merges that master will accept come from the `dev` branch and must submitted through the `pull request` system in GitHub. Additionally, the pull request must be reviewed by at least two members of the group (one being the person who made the initial pull request).

* `dev` - As the name implies, this branch is specifically for synchronizing development code and carrying out merges into production. This branch is not to be confused for a local-dev branch or working branch. It is specifically intended for hosting code, and receiving code. Active development should take place on a seperate, personal branch on your local machine.

---

### Development Cycle  
1. Make sure you are working on the correct local branch. You should *NOT* be actively developing on `master` OR `dev`.  
  * In most cases you will simply be developmenting on a local branch of your own, e.g., `my-dev-branch`, but in some cases you may wish to experiement a little bit, thus it is helpful to have a dedicated local branch specifically for this reason, e.g., `my-experiemental-branch`. This is a common practice when you are attempting to implement something which may radically alter or break the existing code.
2. As you are developing, be aware of the Slack feed as it will help keep you updated to changes in the codebase that will impact your current development. Ideally we want to avoid any situation that will result in multiple developers touching the same file at the same time, but this is not always possible. If someone has made a commit, it is up to you to decide if you should drop what you are doing and merge the code in `dev` with your local branch. Additionally, it is in everyone's best interest to notify the group when we are actively developing and what we are attempting to implement. Once again, this is simply a practice to ensure we avoid stepping on eachothers toes. Since this project is small-scale we often will end up with multiple members working in the same domain at the same time.
3. When have finished making a change and are ready to update the codebase:
  1. Add all files to be commited.
  2. Commit your files.
  3. Checkout the `dev` branch
  4. Update your local copy of `dev` by pulling from the remote `dev` branch.
  5. Attempt to merge your local development branch into your local copy of `dev`.
    * You may be prompted to enter a merge comment, the default is generally okay.
    * If merge conflicts exist, you will need to resolve them.
  6. Push your local copy of `dev` back to the remote repository, making your version the new version.
  7. Return to your local development branch.
  8. Make sure you merge your local `dev` branch into your local development branch.
  
  **Example:**
  
  1. `git add --all :/`
  
  2. `git commit -m "Smoothed the animation transistion of the response header for window reshaping."`
  
  3. `git checkout dev`
  
  4. `git pull origin dev`
  
  5. `git merge sm-local`
  
  6. `git push origin dev`
  
  7. `git checkout sm-local`
  
  8. `git merge dev`

## Command-Line Cheatsheet
* `git clone https://github.com/scotmatson/computer-vision.git` - Will make a local copy of a remote repository. The top-level directory will be named after the repository, in this case `computer-vision`. When cloning from a repository a remote link will be made with the github repository which you cloned and is called `origin`, your default local branch is called `master` by convention.
* `git remote` - Displays the alias of all remote repositories.
* `git status` - Displays the current state of the local repository. Files will displayed as being one of the following:
  * Untracked - A new file that is not yet part of the current repository
  * Unstaged - An existing file that has been modified but is not `staged` for commit.
  * Staged - A modified file that has been `staged` to be commited to the repository
* `git add [filename.ext]` - Will `stage` a specified file for commit.
* `git add --all :/` - Will `stage` all modified/untracked files for commit.
* `git commit -m "[Commit Message]"` - This will commit all staged changes into your `local` repository. The files being commited will all share the same timestamp and message so it is important that you commit frequently so that your commit history and commit messages make sense (i.e., messages should be succinct)
* `git push [remote repository alias] [local branch]` - This is how you update the remote repository. The remote alias referencing the remote repository you wish to push the changes to, you may have multiple registered remote repositories, but in most cases it will simply be `origin`. The local branch refers to the current branch of the repository you are working on. If the `local branch` does not yet exist in the remote repository, it will be created after `pushing`.
* `git fetch [remote repository alias]` - Fetches the resources of a remote repository.
* `git merge [branch to merge]` - Merges a designated branch into the active branch. Conflicts will arise at this stage and you will be notified by Git of said conflict during this operation. Conflicts simply mean that conflicting lines of code exist and manual intervention is required to make the final decision. Conflicts are a safety mechanism to protect you from data loss.
* `git pull` - A shortcut command that carries out a `fetch and merge` operation to your active branch. Given the degree of automation that occurs caution should be taken when utilizing this command since it does not grant the developer a chance to review any of the changes to be merged. Similar to `git merge`, you will be notified of any conflicts which arise and be required to reoslve them prior to carrying out the command.
* `git branch` - Displays a list of all local branches
* `git branch -r` - Displays a list of all remote repositories
* `git checkout [local branch]` - Will `check out` (i.e., make active) a designated local branch.
* `git stash` - Will place elements of the dirty state onto a stack for temporary storage. This will revert the state of your local branch back to the last `Clean State`. Often times you may want to do this simply to throw away undesired file modifications.
* `git reset --hard [remote repository]/[remote branch]` - Will reset the HEAD of your [local branch] back to the state of the [remote branch]. You may need to perform a `git fetch` first.
* `git clean -f` - Will remove all untracked files from your active branch.
* `git log` - Returns a lot of output, you may wish to pipe this command into `less`. The log will spit out every node of the Git commit history. Each node is given a SHA1 identifier and will also display the commit text. You may use the SHA1 identifier to `check out` a node from a previous state.

## Terminology
* Git - A version control system (VCS) which is ran locally on your machine.
* Github - A cloud hosted VCS based on Git.
* Local - Refers to your `local` git repository
* Remote - Refers to to the `remote` Github repository
* Stage - When a file or files are `staged`, they are able to be commited. A modified file is in either one of two states, staged or unstaged. If a file is not staged, it cannot be commited to the repository.
* Tracking - A file OR change that is tracked is one that has been commited to the repository. Each time a commit is made a new snapshot is taken of the current state of all tracked files.
* Dirty State - A reference to when `git status` returns uncommited/untracked changes in the local repository.
* HEAD - Branches can be thought of as directed acyclic graphs. The HEAD represents the pointer to the current node within the graph.
