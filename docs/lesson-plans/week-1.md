# Week 1: Project Setup and Terminal Basics

## Agenda

- Project Overview
- Project Setup
    - Installing Required Software
    - Clone the repositories
- Terminal Basics
    - Common Commands
    - Build Tools
    
## Basic Plan

- Jumpstart Overview
    - What is Jumpstart?
    - Who is this program for?
    - How should I prepare?
    - What am I going to be building?
        - End Goal
    - What technologies will I be learning?
    - How are the projects organized?
        - Common Files
        - Frontend
        - Backend
    - What will each week look like?
    - Important Links
        - Making edits to the dictionary
- Project Setup
    - What is Git
    - Installing IntelliJ
    - Cloning the repositories with Git
    - Installing required apps
- Terminal Basics
    - Common Commands 
        - cd and filepaths
        - ls
        - pwd
        - mv
        - cp
        - mkdir
        - rm
        - cat
        - vim
        - nano
        - sudo
        - man
    - Build Tools
        - npm
        - Maven
        
## Jumpstart Overview

First, we'll be going over the general plan we have for Jumpstart over the next few months.

### What is Jumpstart?

From [our website](https://c4cneu.com/jumpstart).

>Jumpstart is Code4Community's new program that focuses on teaching the basics of web 
>development to beginners. 

Over the next couple of weeks (we have 9-10 sessions planned including this one), we'll 
be going through a lot of the fundamentals you'll need to know for developing an interactive 
web application. Our aim is to help you understand and have the tools for developing a
personal project of your own in the future.

### Who is this program for?

This program is honestly for anyone interested in software development or interested in the
inner workings of a basic web application. Non-computer science majors are welcome! While a 
background in computer programming is recommended, as long as you complete the recommended 
preparation down below, you'll probably be well prepared for this course. We'll also be here 
with dedicated tutors monitoring a special Slack channel and weekly office hours if you have
any questions because __there are no dumb questions__.

### How should I prepare?

To prepare you for this course, we're recommending you take the [Java Codecademy 
course](https://www.codecademy.com/learn/learn-java). The free course is more than enough to
teach the understanding of Java we're expecting you to have. If you already know Java, then you'll
probably be fine without taking it, but for anyone who feels they could benefit from the course,
we highly recommend it. Also, it says it should take ~25 hours to complete, but that includes
all of the paid content too, so expect it to take around 5-6 hours max.

### What are we going to be building?

Throughout this course, you'll have the opportunity (but you're not required) to build a project
we've designed. It's a social media website similar to a blog, think of something like Reddit,
with posts, comments, likes (we're calling them claps though), and a bit of other functionality.

If you have an idea of a project you want to try and make instead of ours, feel free to join us
and work on your project instead. Like it was said earlier, you're not required to make the 
project. If you do end up working on your own project, be aware that the materials we give out 
every week may not end up helping you as much as it would for our project, and you may encounter
issues and concepts we won't be covering, however, feel free to use us as a resource for fixing
and understanding them as they pop up.

#### End Goal

If you're watching the class online, here's where we'll show an example of the final project.

### What technologies will I be learning?

Really quickly, let's start off by getting some terminology out of the way. You'll be seeing 
these terms really often over the rest of the course, and they're really important in 
distinguishing the two main sides of the application. The frontend is the part that a user
will see and interact with; it's the code that runs in a web browser in this case (like the Gmail 
webpage), and it will usually be provided to every user. The backend is the part of the application that isn't often
accessed by users, and the frontend will connect with the backend for performing calculations,
storing data, and providing interactions between multiple frontend applications; the backend code
is rarely provided to users, and is often held on a small set of servers. In the Gmail example, the
backend would be the part of the application that deals with storing the actual email data, returning
it to the frontend when requested, sending emails, and actually moving your email from inbox to
trash, spam, archive, or wherever else.

During this time, we'll be teaching and providing demonstrations for a Java backend 
using a Vert.x framework (a dependency which handles setting up a lot of boilerplate stuff, or stuff which is
commonly set up the same way) and Typescript frontend using a React framework with a PostgreSQL 
database. 

>Note: in the Important Links section of this document, we're providing access to the learning resources webpage
>which contains our 'Jumpstart Dictionary'. If you come across any terminology not explained here, be sure to check
>that out!

The frontend will use packages such as [Material-UI](https://material-ui.com/) for
UI components, [Jest](https://jestjs.io/) for testing the frontend, 
[Axios](https://github.com/axios/axios) as an HTTP client, and [React](https://reactjs.org/).

The backend will use libraries such as [Vert.x and Vert.x-Web](https://vertx.io/),
[PostgreSQL's](https://jdbc.postgresql.org/) database driver, 
[Jackson](https://github.com/FasterXML/jackson)
JSON utilities, [JUnit 5](https://junit.org/junit5/) for a testing framework, and
[Mockito](https://site.mockito.org/) for a mocking framework.

Throughout the course, we'll be covering a lot of topics like Git and terminal commands,
HTML, CSS, and JavaScript, servers, HTTP and REST requests, testing, databases, APIs, and
cloud deployment. 

Don't worry if any of this seems unfamiliar or new to you, we'll be sure to cover all of this
and answer any questions you may have.

### How are the projects organized?

When you open up the project root folders, you'll see a bunch of different files and folders,
probably a lot with strange names and filetypes you've never seen before. We'll go over quick
descriptions of the files right now. You'll learn a lot more about everything below in the 
coming weeks, so don't worry if you don't know what we're saying.

#### Common Files

.gitignore is a file containing regular expressions to describe files we don't want Git
to keep track of when we make commits or push to GitHub.

>A regular expression (regex) is a syntax used to define text matching the given pattern. 
>Check out [regexr](https://regexr.com/) and [regex101](https://regex101.com/) for some 
>common regexes, descriptions, and a playground to test some out.

LICENSE is a file detailing licensing information. In our case, we're using the GPL-3.0
License, which means anyone can use or modify our code for whatever they want (with some
conditions). You'll rarely have to deal with this in practice, but we wanted to add one
so that you can see what it looks like.

README.md is sort of like the introduction file. It's written in a format called 
[Markdown](https://en.wikipedia.org/wiki/Markdown) (the .md filetype), which allows for 
simple and easy formatting. Usually this file has descriptions of the software, instructions
for setting it up, and any other information the developer(s) would like to provide to the
end user.

#### Frontend

node_modules/ is a directory which houses all of the JavaScript packages you'll need. You should
never have do anything with that directory (other than deleting it if you're getting weird issues,
but that should be __*RARE*__), since everything having to do with this directory will be handled
for you. This will appear after you've run `npm install` later on, which is a program to download and
handle external dependencies and packages to be used in your code. This
directory is also usually not included in a Git repository.

public/ is a directory to store unique files and images like manifest files, HTML files, or
special image files. They're put here for easy reference and access.

src/ is the directory with your actual project files. All of your React components,
views, tests, and code will be inside here.

package.json is a file containing dependency/package information, scripts to be run using npm,
and other data about your project.

package-lock.json holds information on requested dependencies, which dependencies are required for 
the requested dependencies, and special information that should rarely change. You should never have 
to do anything with this file, and
it should **_definitely_** be included in a Git repository.

tsconfig.json holds information about your Typescript configuration.

#### Backend

pom.xml is a file with project build instructions, dependencies, and other project information.

api/ is a directory handling routing information and data transfer objects (DTOs).

persist/ is a directory for handling and saving data.

service/ is the entry point for your project, so you'll start it up from there. It handles
connecting everything together and basically 'running' your project.

### What will each week look like?

Every week, we'll have one of these meetings where we'll go over new concepts that
you'll need to build your project. After the meetings, we may give out a description, starter
code, and other resources for what we think you should work on during the upcoming week. 
You're always free to work on other parts of your project or not do it at all if that's
what you want to do. The following weekend before the next meeting, we'll send out
what we're calling 'catch-up code,' which is our implementation of the concepts and
descriptions we told you to work on during the week. This catch-up code will show
the current state of the project and the progression of our app over time. The
reason we're doing this is because we understand that there are weeks that you may 
be sick, drowning in work, just not in the mood to work on your project, or stuck on some 
issues, but you'll probably want to stay caught up with the material. This is our way of 
ensuring everyone has the opportunity to be on the same page.

### Important Links

Just in case you don't have the links or dont't know where they are, here are some 
important course resources.

>Note: there is also a dictionary of common terms we've compiled for you which should be
>available in the Jumpstart Docs

[C4C Jumpstart Docs](https://learn.c4cneu.com) (where this should be)

[Jumpstart Frontend Starter Code (not yet done)]()

[Jumpstart Backend Starter Code](https://github.com/Code-4-Community/jumpstart-backend/tree/starter-code)

[C4C Slack](https://c4cneu.slack.com/)

[C4C GitHub Repository](https://github.com/Code-4-Community)

[C4C Website](https://c4cneu.com)

[C4C Dev Docs](https://docs.c4cneu.com)

#### Making edits to the dictionary

If there's a term you'd like to see added to the dictionary, updated, or formatted differently, you
can click on the pencil icon in the upper right to make an edit (you can do this to the script pages
too if there's a change you want there instead). You will probably need an account, 
and then it should take you to an in-browser edit page. Once you're ready to make the change,
you should be able to go to the bottom to leave a quick message detailing what you changed
(you don't have to do the extended description). Then you'll be able to create a branch, and we'll
review it to make sure it's a good edit, and let you merge it in. Then you'll have successfully 
contributed to the C4C dictionary.

## Project Setup

Now we'll be setting up your project. If you want to see videos for setting up the 
frontend and backend, see below.

The overall setup process will just involve cloning the repositories on your computer and 
then reading the READMEs to see how to set up each individual project.

If you prefer video format, here are some setup videos we've created for setting up the frontend and backend on both 
Mac/Linux and Windows computers.

[Check out our Mac/Linux Setup Video (not ready yet)]()

[Check out our Windows Setup 
Video](https://drive.google.com/file/d/1S7MC9T52kpLTLFJfahayczOvMtDNI6gg/view?usp=sharing)

### What is Git

You've probably heard the words 'Git' and 'GitHub' a few times, so we'll take the time to describe them, and a few
other important terms now. You can read more about git on [Atlassian's git 
tutorial](https://www.atlassian.com/git/tutorials/what-is-version-control).
- Git is a form of version control for your code, which means it tracks changes to a project over time.
This is really useful, and it provides two main benefits: 1) if you ever make a mistake in your work and have
to undo a bunch of changes you made, it's really easy to do, and 2) you can work on multiple different features
at once without worrying about them interfering with each other (which also means that multiple different
people can work on the same thing at the same time while providing a way to combine their changes together).
- GitHub is a website that hosts git 'repositories' for many major companies and open-source projects (meaning their 
code is open to anyone to view/edit/use). It provides useful features, like allowing people to review changes before
they're accepted and being a remote server that people can use for storing their code and collaborating with 
others.
- Repositories (or 'repos') represent an individual 'project' in git.
- Cloning is when you download a repository from an external host (such as GitHub) to your computer.
- Checkout is a command in git that lets you switch the current code to a different branch.
- Branches are the way that a different history is created for a specific feature or bug that is being worked on.
They allow you to split off from a specific point and make isolated changes without having to worry that you're 
changing the code you split off from. 
![git-branches](./img/git-branch.svg)
*Git Branches/Atlassian*

### Installing IntelliJ

The way that you'll be interacting with a lot of the code for this project will be through IntelliJ.
Go to the [install link](https://www.jetbrains.com/idea/download/) and download the
'Ultimate' edition. Since you're a student, you aren't limited to the 30-day trial that would otherwise
be applied.

Once you've downloaded and installed it (you'll probably need to create an account with your student 
email), open it so that the welcome page shows up.

>Note: some people prefer to use text editors like [Microsoft's VSCode](https://code.visualstudio.com/) or
>[GitHub's Atom](https://atom.io/) instead of IntelliJ for working on the frontend. We'll be focusing
>on using IntelliJ for all of this, but feel free to try those out if you're interested.

### Cloning the repositories with Git

Now that you've gotten IntelliJ set up, we'll get to cloning the repositories on your computer.

>Note: you may need a GitHub account to do this. If you encounter an error trying to clone it,
>then then just sign up and and retry the steps after logging into GitHub in IntelliJ.

Inside of IntelliJ, go to File > New... > Project From Version Control..., make sure the 
`Version Control` box is set to `Git`, paste in the following links, and choose where you 
want them to be downloaded to. 

The links you'll want to use are in the __Important Links__ section above.

After the projects are open, you'll want to view the starter code by entering the following command into the terminal
at the bottom of your IntelliJ window for both the frontend and backend projects.

```shell script
git checkout starter-code
```

Once you've done that, you're ready to install other programs we'll need and build the projects. If you've encountered
any issues, please don't hesitate to reach out to us so we can help. It's really common to run into errors
when setting up a new environment.

### Installing required apps

There are a few other programs you'll need to install before we're done here. 

For the frontend and backend, open up the projects and start reading the README.md files by 
double clicking them in the project pane on the upper left. If you don't see it, you may have to
expand the pane by clicking on the vertically spelled "project" tab, and then opening up
the dropdowns indicating folders.

To make sure the formatted text pops up, once you open the README.md files, click on the image-like 
icon in the upper right to view the formatted markdown. You can also try viewing it side-by-side as
plaintext and formatted markdown if you're interested to see what it looks like.

Troubleshooting: 
- For the frontend, don't forget to install your dependencies before starting the project, or you'll
get errors. 
- For the backend, make sure that you set the `JAVA_HOME` variable and that everything else required
is installed.
    - `JAVA_HOME` is a system-level variable which lets programs know where to look for the JDK (Java Development Kit). 
- For Git bash, the terminal may need to be manually set in every project. Don't forget to do that, or
else you'll end up running commands that don't exist in Windows Command Prompt.
    - Git bash is a program which lets you run a Mac/Linux like terminal on Windows. We describe it  little more below.

## Terminal Basics

The terminal is a really important tool, which you'll find extremely useful throughout your 
developer career. Not only does it allow you to access settings and commands which you would otherwise
not have access to, it sometimes is just easier to be able to do some things by typing out commands
rather than pointing and clicking with a mouse. 

Learning how to use the terminal well may take a while, but we'll get you started with a few commands
we think every developer should know. We'll also show you how to build your projects if you 
haven't tried doing that yet.

>Note: we'll be showing you how to use unix-based bash commands, which means that these commands will 
>work for Mac and Linux computers. If you have a Windows computer, either download the Linux subsystem
>or follow the commands in the backend README.md to install Git bash and start using that in your 
>IntelliJ projects.

### Common Commands

The terminal is a tool which uses specific commands to perform system-level actions. The way that it works
is each terminal instance (tab/window) works in a specific directory, and a lot of the commands utilize the
files in the given directory or a subdirectory. The actual terminal syntax depends on which 'shell', or 
command language/interface, is being used. The Windows operating system uses the Command Prompt as a shell,
while Mac and Linux often use BASH (Bourne Again SHell) as a shell.

If you want to learn more about the terminal, check out [this video](https://www.youtube.com/watch?v=oxuRxtrO2Ag).
It's a bit long, but it should give you a pretty solid understanding of how to use the terminal and some
common commands.

#### cd

`cd` is arguable one of the most used commands in the terminal. It stands for 'change directory', and it
allows you to navigate around your computer. 

Format:
```shell script
cd <directory>
```

- You can chain multiple directories together by adding '/' between each directory if you would like
to jump to a specific one.
- You can jump up directories with the '..' notation.
- You can jump to your home directory (the one with Desktop, Documents, ... inside of it) by just typing `cd` or
`cd ~/`

Examples:
```shell script
# Go to your desktop
cd Desktop

# Go to back to your home directory (the one where all your stuff is)
cd ..

# Go up multiple directories
cd ../../../

# Go back to your home directory
cd ~/

# Go to the root directory (the parent directory of all parent directories)
cd /
```

#### ls

`ls` is also a very commonly used commands. It lists all of the contents of a directory (both files and 
sub-directories).

Format:
```shell script
ls <optional filepath>
```

- You can list hidden files in a directory with the `-a` flag

Examples:
```shell script
# List files in the current directory
ls

# List all files in the current directory
ls -a

# List files in the Desktop directory
ls Desktop
```

#### pwd

`pwd` stands for 'print working directory', and it logs the current directory you're located at.

Format:
```shell script
pwd
```

#### mv

`mv` is a command that lets you move a file or directory to another location. It can also be used
to rename a file or directory (since that's the same thing as moving it in a way).

Format:
```shell script
mv <from filepath> <to filepath>
```

- You can't move a file inside of itself or one of its subdirectories (without messing 
around with symbolic links, but that's way outside of the material of this course).

Example:
```shell script
# Move the README.md file to the parent directory without renaming it
mv README.md ../

# Rename the test.txt file to test.md
mv test.txt test.md

# Move the test.txt file to the Desktop from Documents and rename it to hello.world
mv Documents/test.txt Desktop/hello.world
```

#### cp

`cp` copies a file, and it's very similar to `mv`. 

Format:
```shell script
cp <exiting file or directory> <new file or directory>
```

- If you're copying a directory, you need to make sure to include the `-r` flag so that it 
copies everything in the directory too.

Examples:
```shell script
# Copy test.txt to Desktop
cp test.txt Desktop

# Copy the Desktop directory to Documents 
cp Desktop Documents -r
```

#### mkdir

`mkdir` creates a directory.

Format:
```shell script
mkdir <directory name>
```

Examples:
```shell script
# Create a Desktop2 directory
mkdir Desktop2
```

#### rm

`rm` deletes a file or a directory.

```shell script
rm <path to file or directory>
```

- Be careful using this command. Once it's used, files are pretty much unrecoverable without special software.
- If you're deleting a directory, you'll need to pass in the `-rf` flags.
    - The `-r` flag makes it recursive, it will delete all subdirectories.
    - The `-f` flag is called force, and it's sometimes required to delete a non-empty directory.
- Never try to delete the `/` directory using `rm -rf /`. It is a very dangerous command that will
end up deleting your entire computer (there are a couple protections, but would you really want
to test them out?).

```shell script
# Delete the test.txt file
rm test.txt

# Delete the test directory
rm -rf test
```

#### cat

`cat` prints out the contents of a file. It technically stands for 'concatenate' file to 
standard output (your console).

Format:
```shell script
cat <filepath>
```

```shell script
# Print out contents of test.txt
cat test.txt
```

#### vim

`vim` is a text editor that usually comes preinstalled on most terminals. It allows you
to open files, edit them using quick key binds, and write/close the files. It's notorious
for having a really steep learning curve, so people tend to avoid it, but it can be a 
powerful tool if you do end up spending time trying to learn it.

![text-editor-learning-curves](./img/text-editor-learning-curves.png)

We're showing this since you'll have to at some point learn a terminal-based text editor.
It's also faster sometimes for quick edits to a file.

Before you even try to open it, though, you need to know how to exit it. The easiest way to
do that is to type `<esc>`, then `:q!`.

Format:
```shell script
# Open a file using vim
vim <filepath>

# vimtutor (see below)
vimtutor
```

- You start in 'normal' mode
- To edit a file, type 'i' to go into 'insert' mode.
- To get back into normal mode, type <esc>
- To save a file, type ":w" in normal mode
- (again) To exit, type ":q!" in normal mode
- The "q!" means quit without saving, so you can also do ":wq" to write and then quit
- Try out the `vimtutor` command if you want to learn how to actually use vim.

#### nano

`nano` is another terminal-based text editor. It's easier to use compared to vim and it has the 
controls on the bottom of the screen, but it's (in Conner's opinion) a horrible experience 
that leaves him annoyed every time he uses it. If you're dedicated to learning a really fast
text editor, learn vim, but I'm leaving this here for people who don't want to.

Example:
```shell script
nano <filepath>
```

#### sudo

`sudo` stand for "super-user do," and it's required at times where elevated permissions are required.
This may be when you're dealing with system configurations or programs that need access to possibly 
sensitive information, so your password will be required to allow it to make changes. This is sometimes a good
thing, but you should definitely not just start using it whenever a program isn't working in a way
you want it to. Again, remember that this gives permission to whatever program you're calling it with,
so you should be a little careful about using it. You can read a little bit more about that 
[here](https://www.linux.com/news/sudo-or-not-sudo-question/).

Format:
```shell script
sudo <some other command>
```

- An example of a time where it may be useful to use it is when globally installing an npm package. 
npm will need access to special folders, and so sudo will likely need to be used.

Example:
```shell script
# Globally install the create-react-app package using npm
sudo npm install -g create-react-app
```

#### man

`man` shows the manual for a command. A lot of times, it can be the same as just calling 
a command with the `--help` or `-h` flags, but it will often provide more information.
It will usually show other flags, how the command should be formatted, and general
options for its use.

Format:
```shell script
man <command>
```

- When you use `man`, it will open up a program called `less`, which is very similar to `vim`.
The difference between `vim` and `less` is that `vim` is an editor, while `less` is more of
a viewer. Therefore, `less` has much fewer commands. The only commands you need to know for less
are the up/down arrow keys (or "j"/"k" if you're used to `vim`) and "q" to quit 
(notice how there's no ":" preceding or "!" following it).
- It seems like `man` may not come with Git bash, so just stick with `--help` and `-h` for now.
    - The `--help` and `-h` flags are the same, but sometimes some programs will only implement
    one or the other, so it's useful to know both.

Example:
```shell script
# Show the manual for ls
man ls 

# Use the --help flag
ls --help

# Use the -h flag
ls -h
```

### Build Tools

You'll probably have seen the following terms used quite a bit, so we'll go over the basics of
what they do and how to use them.

#### npm

npm stands for the Node Package Manager, and it's what's commonly used to install 
dependencies/packages and run servers/scripts. It's also used for Typescript 'transpilation'
and linting. The settings for how npm works on a specific project are set in the package.json
file, and the settings for Typescript are in the tsconfig.json file.

>Transpilation is when instead of 'compiling' code, the code gets translated to a different language.
>In this case, Typescript is being converted to Javascript.

>Linting is when the code is checked for formatting and against common style guides.

Common commands include:
- `npm install`: install dependencies for a project
- `npm install -g`: install a global dependency (typically needs `sudo`)
- `npm start`: starts a server
- `npm test`: runs tests
- `npm run <command>`: runs a command in the package.json scripts section
- `npm run build`: a React command (can be supplied with other things though) to prepare your
project for a production environment (compress everything and set up resources).

#### Maven

Maven is very similar to npm in a lot of ways. It is one of the popular project build
and dependency managers for Java. Similarly to npm, it allows you to import plugins 
(lets you use outside code to setup and run your own program) to format code and adjust how
your project is built. It also allows you to create these sort-of sub-projects, which 
provide modularity and flexibility within your code. 

If you take a look through the project, you might notice multiple pom.xml files.
One main pom.xml in the project root, and three more (one in the subdirectories api/, persist/,
and /service). The way we set up this project is so that each of the subdirectories are
modules, and therefore sub-projects of the main backend project. 

>Modules are groups of code that are compiled separately of each other, however, they can be used 
>as dependencies of other modules. If you take a look at the service pom.xml, you'll notice that
>there are dependencies on the persist and api modules.

Each command in Maven is called a 'goal,' and goals can make up parts of other goals. You 
can also run goals individually or together. For example, `mvn`, `mvn clean install`, 
and `mvn clean spotless:apply install` all have the same result.

Common commands include:
- `mvn`: the default 'goal'. This runs 2 important tasks in the Maven 
['lifecycle'](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html);
`mvn clean` and `mvn install`
- `mvn clean`: deletes built artifacts and compiled code so that it can be rebuilt later
- `mvn install`: compiles code so that it can be run later on (and also applies the 
`mvn spotless:apply` command)
- `mvn spotless:apply`: performs code formatting to nicely and uniformly clean up your code

A flag which you may want to use every once in a while when you're having trouble compiling a
code because of a test, but you want to have it compiled so that you can run the test
using the IntelliJ debugger is the `-DskipTests` flag. You can append it to the end
of the `install` goal above, and it will skip tests so that you can successfully compile. 
Remember though, this is not a command
you want to be using often, since tests are there to help you catch issues in your code.