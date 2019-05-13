# Chapter 1: Create a repository for your course work

## Objectives

- Create a local project to be used during the course
- Use github to create a new remote repository

## Overview

In this lab you will use create a local Git repository and optionally setup a GitHub repo and push code to your repository.

## Steps

1. We will be using Git in class as it is a helpful tool while working with Angular. Using the Angular CLI tool - we will create and modify many files at once. Sometimes, this may have been done mistakenly, and can be a mess to clean up! To make the process easier, and be able to UNDO - we will use a local Git repo to track our files.
   
2. Depending on your lab setup, the global config for git may or may have not been setup. You can verify this by typing this command into the command prompt.  
    ```
    git config --global user.name   
    git config --global user.email
    ```

3. If there are values present, that is all you need for a local Git repo to be able to commit and discard your changes.  If you would like to hook up your work to a Remote Git repo - such as with GitHub, you can set your own personal identifiers.
   
   The actual values to not need to match anything such as your work or GitHub email. These are just idetifiers for when the code is pushed to a remote branch. These are not used for authentication.
   
4. To set up your personal git username and email idenitifers, locally using these commands - replacing **John Doe** in inside the quotes with your name and **johndoe@example.com** with your email.

   1. git config --global user.name "John Doe"
   2. git config --global user.email johndoe@example.com

5. Open a command prompt in windows and navigate to c:\

6. Navigate to C:\ and issue this command

   ```bash
   mkdir my-angular-course
   ```

7. Change into this directory using `cd my-angular-course`

8. You will be using this directory to create an Angular project from scratch. If you wish to continue, the steps that follow will help you to setup a GitHub repository and link it to this local directory. You will need a valid GitHub account that you can login to. So if you have a phone, or other way to check your email you can set this up. Some students have created temporary emails using Google, Yahoo, etc and have used this to setup GitHub. You can always change the email on your account later when you have ccess to your email.




## Setting up GitHub so that you have a remote repository

1. Log into your Github account, click the + in the upper right and choose New repo

2.  Call it **my-angular-course**. Do not initialize - do not check any boxes. When it creates it will display some setup code which includes **…or create a new repository on the command line**

3.  Copy the multiple commands given by GitHub into your command prompt within the **my-angular-albums**. It will look similar to the following (**DO NOT EXECUTE THESE COMMANDS - GET THE ONES FROM GITHUB**)

    ```bash
    echo "# test1234" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/JudyLipinski/test1234.git
    git push -u origin master
    ```

4.  From the prompt, open in VSCode with code .

5.  Update the README with your name and the date. Save the file.

6.  In VSCode commit, your changes by clicking the third icon down which looks like a Y. In the source control: git menu, type in the message box - Added name and email. Click the checkmark to commit. This commits it to your local repository.

7.  In VSCode, look at the bottom left where it says "master" to the right of this notice the circular arrows. Click this icon, which will pull any code from the remote repo, and then push any changes to be committed.

8.  You will be prompted to input your username and password for Github.

9.  Once logged in successfully you should be able to check Github and see your changes.

10. Install windows git credential helper:

   git config --global credential.helper wincred

   https://help.github.com/en/articles/caching-your-github-password-in-git

   https://agilewarrior.wordpress.com/2017/09/25/how-to-setup-git-credential-store-in-windows/
