# Recipe App Using API
*An app to find the best recipe using API!
## Features:
	-Register, log in, and log out as a user.
	-Create and change user image.
	-View food recipes and reviews.
	-Create, delete, and edit food recipes review.
	-Create, delete, and edit food recipes.
	-Upvote and downvote review.
## To set up:

```no-highlight
	*Git clone repository. 
	*Set up .env based on .env.example This will require you have an AWS.
	*Run yarn install
	*Run createdb recipe-app-using-api_development
	*Navigate to the app root directory, run:
		yarn migrate:latest
		yarn db:seed
	*Navigate to the app root directory and run yarn dev
	*Go to localhost:3000 in a browser to see the app.
## Creator:
	William Vo
## Technologies used:
	*Front End: ReactJS, Sass, HTML.
	*Back End: NodeJS, Express, Objection, Knex.
         
               
