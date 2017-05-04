#  Display WeatherUnderground PWS weather data in a Node.js site by Using WeatherUnderground API 
Problem: The purpose of this exercise is to build a prototype that shows we can integrate The Weather Underground into our exisIng NodeJS site. Please display on a site the relevant weather data from a Personal Weather StaIon (PWS).

# Solutions:
## Solution 1: Client central Solution (Implemented in this prototype)
![Client Central Solution](https://github.com/rongyj/nodejs-weatherunderground/blob/master/Arch-Diagrams/Slide1.jpg)

This solution will be client/browser centric solution. The Node.js site just serves the other contents or client side java scripts. The client/browser will make the rest call to the WeatherUnderground API directly to get the weather data. 
## Solution 2: Server Central Solution
![Server Central Solution](https://github.com/rongyj/nodejs-weatherunderground/blob/master/Arch-Diagrams/Slide2.jpg)

This solution will be Node.Js server centric solution. The server will need periodically call the WeatherUnderground APIs for each live client/browsers to push the weather data to the client. The client side can implement something like react/angular js client-side framework. It can also implement as websocket to push the data to client side. 

## Setup the docker container for the solution 1 
### Please install docker engine in your localhost if not. It is very easy to do it from www.docker.com
### Git clone the repo from github
`git clone https://github.com/rongyj/nodejs-weatherunderground.git`
### Pull the prebuilt docker image from hub.docker.com
`docker pull rongyj/nodejs-weatherunderground`
### Also you can build your own docker image by running :
`cd nodejs-weatherunderground;
docker build -t ronfyj/nodejs-weatherunderground .`
### Start the docker container with mapping the port to localhost
`docker run -d -p 8086:8080 rongyj/nodejs-weatherunderground`
### Access the node.js site from a browser with url : http://locahost:8086/resume
### Test result will look like the screenshot as below:
![Test result screenshot](https://github.com/rongyj/nodejs-weatherunderground/blob/master/result-screenshot.png)

You can see the temperature of your local city. The city might not be exactly the city you reside because it is using ip location to geolookup the location. It is not that accurate. But we should be able to improve it with more information from the google geo lookup service.