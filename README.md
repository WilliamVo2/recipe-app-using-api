# Recipe App Using API
* Built an app that allows users to find the best food recipe using the Edaman's API.
### Features:
* Register, log in, and log out as a user.
* Create user image.
* Add, edit a new picture profile.
* View food recipes and reviews.
* Create a food recipes review.
* Search recommendation diet food by enter an ingredient in search box.
* Can view the current user if you log in.
* Can vote, write review on rendering web page.
* See data visualize in PieChart and LineChart.

### To set up:
* Git clone repository. 
* Set up .env based on `.env.example` This will require you have an `AWS` account.
* Run yarn install
* Run createdb recipe-app-using-api_development
* Navigate to the app root directory, run:
		yarn migrate:latest
		yarn db:seed
* Navigate to the app root directory and run yarn dev
* Go to `localhost:3000` in a browser to see the app.
	
### Creator:
	William Vo
	
### Technologies used:
* Front End: ReactJS, Sass, HTML.
* Back End: NodeJS, Express, Objection, Knex.
* Database: SQL, S3
* Cloud & CI/CD: AWS
         
               
