#  Display WeatherUnderground PWS weather data in a Node.js site by Using WeatherUnderground API 
Problem: The purpose of this exercise is to build a prototype that shows we can integrate The Weather Underground into our exisIng NodeJS site. Please display on a site the relevant weather data from a Personal Weather StaIon (PWS).

# Solutions:
## Solution 1: Client central Solution (Implemented in this prototype)
![Client Central Solution](https://github.com/rongyj/nodejs-weatherunderground/blob/master/Arch-Diagrams/Slide1.jpg)

This solution will be client/browser centric solution. The Node.js site just serves the other contents or client side java scripts. The client/browser will make the rest call to the WeatherUnderground API directly to get the weather data. 
## Solution 2: Server Central Solution
![Server Central Solution](https://github.com/rongyj/nodejs-weatherunderground/blob/master/Arch-Diagrams/Slide2.jpg)

This solution will be Node.Js server centric solution. The server will need periodically to call the WeatherUnderground APIs for each live client/browsers to push the weather data to the client. The client side can implement something like react/angular client js client-side framework. It can also implement as websocket to push the data to client side. 