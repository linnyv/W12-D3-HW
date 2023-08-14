const express = require("express");

const server = express()
const PORT = process.env.PORT || 3009

server.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"})
});

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
});

//View engine
server.set("view engine", "ejs");

//Route 1: Home
server.get('/', (req, res) => {
    res.render('<h1>Gonna be quoting movie quotes</h1>');
});

//Route 2: Quote 1
server.get('/quote1', (req, res) => {
    res.render(`<h1>It's just a flesh wound.</h1>`);
});

//Route 3: Quote 2
server.get('/quote2', (req, res) => {
    res.render(`<h1>What is this? A center for ants?</h1>`);
});

//Route 4: Quote 3
server.get('/quote3', (req, res) => {
    res.render(`<h1>If I'm not back in five minutes, just wait longer.</h1>`);
});

//Route 5: Quote 4
server.get('/quote4', (req, res) => {
    res.render(`<h1> You sit on a throne of lies.</h1>`);
});

//Route 6: Quote 5
server.get('/quote5', (req, res) => {
    res.render(`<h1>Even if I wanted to go, my schedule wouldn't allow it. 4:00, wallow in self pity; 4:30, stare into the abyss; 5:00, solve world hunger, tell no one; 5:30, Jazzercise; 6:30, dinner with me — I can't cancel that again; 7:00, wrestle with my self-loathing. ... I'm booked. Of course, if I bump the loathing to 9, I could still be done in time to lay in bed, stare at the ceiling, and slip slowly into madness.</h1>`);
});

//Route 7: Quote 6
server.get('/quote6', (req, res) => {
    res.render(`<h1>He's so fluffy, I'm gonna die!</h1>`);
});

//Route 8: Quote 7
server.get('/quote7', (req, res) => {
    res.render(`<h1>The Batman soundtrack. Throw it.</h1>`);
});

//Route 9: Quote 8
server.get('/quote8', (req, res) => {
    const data = {
        title: "The Waterboy",
        quote: "Now that's what I call high quality H2O."  
    };

    res.render(`quote8`, data);
});

//Route 10: Quote 9
server.get('/quote9', (req, res) => {
    const data = {
        title: "The Grim Adventures of Billy and Mandy",
        quote: "I thought you were BADDD! You ain't BAD! You ain't NUTTIN'!"
      };

    res.render(`quote9`, data);
});

