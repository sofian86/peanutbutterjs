PeanutButter.js
==============
PeanutButter.js is a platform to facilitate launching a Game Jam website. The main goals of the project is to easily allow for management and updating information regarding the Jam, its events, and locations. It will also allow for people to login and register accounts.

PeanutButter.js is a Node Webapp built on the Express Framework with MongoDB and Backbone. The inital Styling is done with Bootstrap3 in SASS with a focus on semantic markup and atomic styling.

Installation
------------
This assumes that you already have git installed... and are already familiar with the Terminal Prompt and commands.

Requirements:
* Node >= 0.10.0
* Grunt >= 0.4.1
* Ruby >= 2.1.0
* Sass >= 3.2.12
* Compass >= 0.12.2
* MongoDB 

### Mac OS X
I highly recommend using Homebrew as it easily manages and maintains most of the required packages involved.

#### With Homebrew
http://brew.sh  
Package Manager for Mac OS X

##### Xcode and Command Line Tools
https://developer.apple.com/xcode/  
Xcode and The Command line tools allow you to run and compile the neccesary packages for Homebrew and other development build processes

Xcode is installed via the Mac App Store, and is free. (http://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12)  
Once Xcode is installed:  
1. Open Xcode  
2. Go To Preferences (In the Xcode Menu)   
3. Select Downloads and click install Command Line Tools   

*OSX 10.9 Mavericks* 
As of OSX 10.9 (Mavericks) you no longer have to install Xcode itself and can just install the command line tools. 
Follow these steps: 

1. Open a new Terminal Window 
2. type `xcode-select --install` into the terminal window 
3. A pop-up window will appear asking you to install the tools 
4. Click Install. 

This will take a while, but once its complete your done.

##### Installing Homebrew
http://brew.sh  
To install homebrew simply type in the following command into your terminal.

```bash
    ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

Follow the instructions and prompts in the Terminal and this will setup homebrew for you. 
Its also recommend to immediately run `brew doctor` in the terminal once installation is complete to check and make sure that there are no possible issues with HomeBrew. 
Follow and prompts and instructions from runnning `brew doctor` and that should fix most issues with HomeBrew.

Also it is recommended to run `brew update` before installing any new brews.

For more info on installing homebrew see: 
https://github.com/Homebrew/homebrew/wiki/Installation

##### Installing Node
http://nodejs.org/
Node is the server-side javascript engine and platform that Peanut Butter is written on top of.

*With HomeBrew*  
In the Terminal Widow run `brew install node` follow the command prompts and you should be set.

*With Package Installer*  
Visit http://nodejs.org/ in your browser and download the latest install package.

Unpack and Open the Package Installer, and follow the installer instructions

*n node version manager*  
If you need to run different versions of node, for advanced usage. I recommend installing n https://npmjs.org/package/n otherwise skip this section. 
To install type `npm install -g n` into a terminal window 
After installation to install a version of node type `n <version number>` for example 
```bash
$ n 0.8.14
$ n 0.8.17
$ n 0.10
```

then to select which version to use currently type `n` into the terminal 
Use the up / down arrow to navigate, and press enter or the right arrow to select, or ^C to cancel:

`n stable` will use or install the latest stable release.

##### Ruby
Ruby does come preinstalled on OS X, but usually an old stable release. If you want to update Ruby it is recommended to install RVM (Ruby Version Manager)

http://rvm.io/rvm/install  
Simply run in your terminal
```bash
\curl -L https://get.rvm.io | bash -s stable --ruby
```
Follow any prompts and this should install the latest stable version of ruby

##### Sass & Compass
Sass and Compass are CSS preprocessors that add a lot of functionality to CSS and Styling with Compass adding many builtin functions that help with crossbrowser css3  
http://compass-style.org  
http://sass-lang.com  

In a terminal run the following commands
```bash
$ gem update --system
$ gem install compass
```

##### MongoDB
http://www.mongodb.org/   
MongoDB is a document based NoSQL database used for the project. Why Mongo over Postgres or MySQL? Because it seems very node/javascript friendly, and it stores objects as JSON-style documents...

simply run 
```bash
$ brew update
$ brew install mongodb
```
Take note of the prompts and commands that the install lists to start and stop mongodb. But an example is listed here: 
```bash
To have launchd start mongodb at login:
    ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
Then to load mongodb now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
Or, if you don't want/need launchctl, you can just run: 
    mongod
```

##### Grunt
Grunt is a JavaScript Task Runner, and is used mostly for building and compressing the Front-End files. But also includes useful tasks for development including livereload, and running the server locally via NodeMon. Essentially think of it as Ant, Make, Rake, on steroids.

http://gruntjs.org

To install Grunt simply type 
```bash
npm install -g grunt-cli
```

And that installs the basic grunt command line tools

### Windows
(This will be added once someone figures it out)
### Linux
(This will be added once someone figures it out)

## Final Steps
Once you have all the neccesary tech and libraries installed. You then must setup your local repository. 

In a terminal window, navigate to your local repository root folder, Where `GruntFile.js` is located. Here run the command  
`grunt install`  
which will install all the neccesary bower (http://bower.io) and npm packages to build and develop with. 

Now your ready to develop or deploy!

Development
-----------
### Coding Guides

#### Javascript
Please follow along the AirBnB Javascript StyleGuide
https://github.com/airbnb/javascript

All of the Build Processes check the JavaScript with JSHint.
So if you break from the StyleGuide, your build will break.

#### CSS/SASS
Use the Google Style guide as a base for the css:
http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml
And for SASS additions follow the CSS-Tricks recomendation:
http://css-tricks.com/sass-style-guide/

Its is highly recommended to also follow the guidelines of http://smacss.com/ to create easily themeable and managable CSS.

#### Git Contributing and Branching
GitFlow
http://nvie.com/posts/a-successful-git-branching-model/
Following @nvie process for development branching model

Its highly recommended you install his Command Line Extensions for Git
as they will make following the model much easier:
https://github.com/nvie/gitflow

As a note:
SourceTree by Atlassian is a great git client for mac and windows, and with the CLI Extensions installed. Has intergration for GitFlow as well.
http://www.sourcetreeapp.com/

#### Using Grunt
http://gruntjs.org

If you haven't used Grunt before, be sure to check out the [Getting Started guide](http://gruntjs.com/getting-started 'Getting Started Guide'), as it explains how to create a Gruntfile as well as install and use Grunt plugins. Grunt is a JavaScript Task manager used to handle and simplify running of the local dev server, building the app for deployment, and running code testing.

To run grunt tasks, open a terminal window and navigate to the root directory of the peanutbutterjs files.   
Here you can run the following commands:

`grunt install`  
    Essentially a wrapper for running `bower install` and `npm install`. Makes sure that all of your dependencies for the project are installed locally, according to `package.json` and `bower,json`  
`grunt serve`  
    Starts up a local instance of the development server. This runs the node app through nodemon, and injects Livereload into the front-end code. Allowing the server to restart on any backend changes automatically, and automatically refreshes the browser on any front-end changes.  
`grunt build`  
    Builds out the front-end files for deployment, by running preprocessing, concatenation, compression/minification and copying the files to the dist folder. 

#### Front-End
* RequireJs         http://requirejs.org/
* Backbone          http://backbonejs.org/
* jQuery            http://jquery.com/
* Sass              http://sass-lang.com/
* Compass           http://compass-style.org/
* Sass Bootstrap 3  https://github.com/jlong/sass-bootstrap
* LogLevel          http://pimterry.github.io/loglevel/
* HandleBars        http://handlebarsjs.com/


#### Back-End
* Node                  http://nodejs.org/
* Express 3 Framework   http://expressjs.com/
* MongoDB               http://www.mongodb.org/
* Jade Templates        http://jade-lang.com/
* LogLevel              http://pimterry.github.io/loglevel/

#### Testing
This is a feature to be added for Beta Milestone

Deploy To Server
----------------
### VPS (Dreamhost)
This will be updated after the Beta Milestone.
