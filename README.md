# recipe-app-using-api
Recipe App Using API
An app to find the best recipe using API!
Features:
	Register, log in, and log out as a user
	Create and change user image
	View food recipes and reviews
	Create, delete, and edit food recipes review
	Create, delete, and edit food recipes
	Upvote and downvote review
To set up:
	Git clone repository 
	Add .env in server with online UUID generate key
	create the database by run : createdb recipe-app-using-api_development
	Run: yarn install
               cd server
               yarn run migrate:latest
               yarn run db:seed
               cd ..
               yarn run dev
	Go to localhost:3000 in the chrome browser to see the app.
  Go to "/recipes" to see implement of the list Recipe with the seach key "chickens" ingredient.
	
Author:  William Vo
