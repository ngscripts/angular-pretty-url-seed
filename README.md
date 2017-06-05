# `angularjs-pretty-url-seed` — The only HTML 5 Mode Routing Seed for Angularjs with Build and Server

This project is an application skeleton for Angularjs web app with pretty URLS, server everything set up in advance.
 You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app has a few controller, services, directives and components. It even shows how to structure your application
in a good way so that you can have complex structure develop easily with full DRY (Don't repeat yourself)
the seed is very easy to use most of it focus on configuration.


## Getting Started

To get you started you can simply clone the `angular-pretty-url-seed` repository and install the dependencies:

### Prerequisites

You need git to clone the `angular-pretty-url-seed` repository. You can get git from [a link](https://github.com/ngscripts/angular-pretty-url-seed).

We also use a number of Node.js tools to initialize and test `angular-seed`. You must have Node.js
and its package manager (npm) installed. You can get them from [a link](https://github.com/ngscripts/angular-pretty-url-seed).

### Clone `angular-pretty-url-seed`

Clone the `angular-pretty-url-seed` repository using git:

```
git clone https://github.com/ngscripts/angular-pretty-url-seed.git
cd angular-pretty-url-seed
```

If you just want to start a new project without the `angular-pretty-url-seed` commit history then you can do:

```
git clone --depth=1 https://github.com/ngscripts/angular-pretty-url-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install `gulp` globally using `npm`

```
npm install -g gulp
```
Don't forget to use `sudo` while working in Linux. 

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via ``, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application in Development Mode

You can run the development server without - No Watchers Required:

```
npm run serve
```

### Build the Application

Build the Application to `/build` folder using the following Command:

```
npm run build
```

### Run the Application using Production Server

Run the Application from `/build` folder using the following Command:

```
npm run serve-prod
```


### -----  ENJOY ----