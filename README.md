# OceanLand

[oceanland.herokuapp.com](http://oceanland.herokuapp.com)

[Wireframes, ERD & User Stories](https://www.dropbox.com/sh/uxmytxcm1ro1fct/AADidwNp-JXA5wpye4m03Lkca?dl=0)

## Basic Info
OceanLand is a full-stack web application built entirely on React.  Users can view photos of various fish, and, upon signing up, create, edit, or destroy fish.   

## Approach taken
I wanted to use this project to work on my skills with React. I wanted to see if I could create a CRUD app with authentication using JWT without serving more than a single page from my server.  Also, the only HTML I wrote for this project is the div containing the React app, the rest was done entirely with React components.

Initially I scoped out a significantly more complex application, but after hitting some major roadblocks I had to pivot midway through to ensure I could produce something.  

## Installing dependencies
 ````npm install ```` should be all you need.

## Technologies used
* Built on the MERN stack (MongoDB, Express, ReactJS, NodeJS)
* HTML / CSS / JavaScript
* BootStrap 3
*Reactify, Browserify, and gulp used to parse JSX
* Complex model validations created with help from the [mongoose validator package](https://www.npmjs.com/package/mongoose-validator)
* Font Awesome 


## Known Issues
* I implemented fullpagejs on the splash page before I relized it broke the rest of the app. I took it out but some of the code still remains.
* I tried to implement radio buttons so users could set if a fish was edible or not, but I couldnt get them working in react.  Some of the code still remains.    
* The flash message system I created is a bit wonky.

## Wishlist
* Radio buttons for edibility on fish creation
* If fish is edible, include links to various recipies for said fish
* Add in an aquarium model, where users can add fish from the database to their tanks. Tanks would be displayed with animated images of selected fish inside them.    
* Abstraction of code into more of a Flux-style architecture

##Screenshot
![Splash Page](https://github.com/Rufasa85/Oceanland/blob/master/screenshots/splash.png "Desktop screenshot")

## Contributors
* Joe Rehfuss