# User-Hobbies
<ul>
  <li>Website for users to add hobbies and Profile picture, View all the users in the Database</li>
  <li> Adding a picture is completly user preference if a picture is added it will be displayed if not application will assign a picture</li>
</ul>

# Technologies used
<ul>
  <li> FrontEnd: React bootstrapped with <a href="https://facebook.github.io/create-react-app/" target="_blank">Create-React-App</a></li>
  <li> Backend: Node with Express</li>
  <li> DataBase: MongoDB</li>
</ul>

# Application Startup steps
To run this on your local machine
1. Download/Clone Repository
2. Unzip
3. Run `npm install` from unzipped root folder
4. `cd client` 
5. `npm install`
6. `cd ../`
7. `npm start`

Application will run on port 3000 and 5000

# Routes in application
<ul>
  <li>To add user <a href="http://localhost:3000/adduser">http://localhost:3000/adduser</a></li>
  <li>To View All Users in DB <a href="http://localhost:3000/allusers">http://localhost:3000/allusers</a></li>
</ul>


# How to Connect to your own Database
To change the database url 
1. Open model/db
2. Modify url string to your DB connection URL
