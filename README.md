# YelpCamp
YelpCamp is a website where users can view, create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy.

This project was created using Node.js, Express, MongoDB and Bootstrap.

Passport was used to handle authentication.

Mapbox was used to locate a campground.

## Features
* Users can create and remove campgrounds(which they own).

* Users can review campgrounds once and remove their review.

* User can't review his own campground.

* User profiles include information of the user.

* Added authentication and authorization.

* Added map feature to view location of a campground.

* Sort campgrounds on basis of price, date and reviews.

## Install

For running this project on your local machine:

- [Node.js](https://nodejs.org/en/download/) is required.

- Clone this repo.

- Then execute the following command on your terminal in the project directory:

> NOTE : You should be inside YelpCamp directory 

```
$ npm i
```

- Now run seeds.js file to seed the database 

```
$ node seeds.js
```

- Now run index.js file to start the server

```
$ node index.js
```

