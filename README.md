# Magic Events
## Author
Mateusz Maj
## Getting started
To run project backend go to `server` folder and type
```
npm start
```
To run project frontend go to `magic-events` folder and type
```
npm start
```
Client runs on port 3000, server runs on port 3001.\
I've created two collections using MongoDB.\
They include events, for which users can register\
and users' registration codes.
## Tech stack
#### Backend
* Node js
* Express js
* MongoDB
#### Frontend
* React js
* Bootstrap
## Things to do in the future
* Dockerize app
* Fix profile tab (it doesnt show events dates and pictures)
* Hide MongoDB username and password in .env file
* Add feature not allowing user to register for event with given circumstances (compare event's date with today's date)