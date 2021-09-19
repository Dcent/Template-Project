# TemplateProject
This template Project is make for it to make it even faster to start up a new project.

it is build on an Asp.core Project with an API possibility for the web frontend StencilJS has been installed,
and a few examples has been made to show how to build tests and components, MirageJS has also been installed,
for the unit test to use but also for Storybook component Lib. for CSS I have picked stylus as it is what I know. 
all will work out of the box and is ready to get expanded on, *MISSING* CSS bundling, but the idea is the Stencil
components import their own styling and therefore the CSS build in ITCSS structure should only contain common css,
anyway. 

Domain model driven backend code is also set up with Data access layer and a Core Project. this will be worked on in
future versions. 

mobil app is empty project and should/can be replaced by a new one when you start the project build, in this,
setup its just to show it has a place


# Npm tasks
Here is a list of the different npm tasks you get out of the box

## Create tasks
the created tasks are made for generation the different frontend files in the frontend folder<br />
Hygen is used for the creation of new files in the frontend folder. you can ofc also do it manuel<br />
__"create:ts:class": used to create a new class with chosen name it will promp for<br />__
__"create:ts:enum": used to create a new enum with chosen name it will promp for<br />__
__"create:ts:util": used to create a new util file with chosen name it will promp for<br />__
__"create:ts:interface": used to create a new interface with chosen name it will promp for<br />__
__"create:ts:service": used to create a new http-service with chosen name it will promp for<br />__
__"create:ts:component": used to create a new stencil-Component, test and css with chosen name it will promp for<br />__

## Static tasks
they are used for component lib, in this project I have set up storybook there for the only command you will 
use here is the __static:storybook__ one<br />
__"static": used to build stencil in static mode, never really used beside together with storybook <br />__
__"static:storybook": starts the static build of stencil, and static:styling, then serve storybook for you running in 3 threads so it watch for build<br />__
__"static:styling": builds and watch the styling used for storybook<br />__
__"storybook": starts storybook on port 1338 can be changed if you like <br />__

## build tasks
This is the Prod mode tasks, it makes sure to build all so it is ready for a Prod env. __build__ will be the 
most used command here.<br />
__"build": builds the stencil and styling code for Prod use, and compress css<br />__
__"build:stencil": build stencil for prod use<br />__
__"build:styling": build stylus to css for prod use in compressed<br />__

## start tasks
this is the debug/dev mode of the project frontend, it enable you to debug in your browser as stuff is not compressed
__start__ is the one you will use the most from here as it ensure both styles and JS is watch and build on changes<br />
__"start": builds the stencil and stylus for dev mode, and watch for changes to rebuild for enable debug as well <br />__
__"start:stencil": builds stencil for dev mode so you can debug your code also watches for changes<br />__
__"start:styling": builds stylus for dev mode and watches for changes<br />__

## test tasks
this is the unit test part, and is used to make sure all test are green before you do a commit. it should be run before 
creating a PR or commit.. but also on your build server to make sure the build does not break __test__ will be the normal
command to use from here<br />
__"pretest": this is for setting the tsconfig for test setup it is run automatic before npm test<br />__
"__test": this command runs both stencil test and utils test in solution <br />__
__"test:stencil": runs the test in stencil components<br />__
__"test:frontend": runs all unit test for util files<br />__


## install and setups
This is the tasks you should run before starting anything else, the __pre-build__ should only be run the first time,
you want to build the solution on your pc, and is also the one you should run on your build server, for building to deploy on webserver.<br />
__"install-ci": used to install all packages in the frontend make sure to have yarn install global by using pre-build<br />__
__"pre-build": used to install yarn on global and then build the solution for prod mode<br />__

