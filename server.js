'use strict';

const express = require('express');
var $ = require('jquery');
var fs=require('fs');
var jsdom = require('jsdom');

// Constants
const PORT = 8080;

// App
const app = express();

app.get('/resume',function(req,res){
    res.set('content-type','text/html');
    res.send(fs.readFileSync(__dirname+'/resume.html','utf8'));
     res.end();
});

app.get('/', function (req, res) {
  res.send('Hellow world !\n');
});

app.listen(PORT,'0.0.0.0');
console.log('Running on http://localhost:' + PORT);