const express = require("express");

const server = express()
const PORT = process.env.PORT || 3009

//View engine
server.set("view engine", "ejs");

server.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"})
});

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
});

const routes = [
    { URL: "/home", label: "Home" },
    { URL: "/quote1", label: "Quote 1" },
    { URL: "/quote2", label: "Quote 2" },
    { URL: "/quote3", label: "Quote 3" },
    { URL: "/quote4", label: "Quote 4" },
    { URL: "/quote5", label: "Quote 5" },
    { URL: "/quote6", label: "Quote 6" },
    { URL: "/quote7", label: "Quote 7" },
    { URL: "/quote8", label: "Quote 8" },
    { URL: "/quote9", label: "Quote 9" },
  ];

  server.use((req, res, next) => {
    res.locals.links = routes;
    next();
  });  

//Route 1: Home
server.get('/home', (req, res) => {
    res.render('home');
});

//Route 2: Quote 1
server.get('/quote1', (req, res) => {
    res.render('quote1');
});

//Route 3: Quote 2
server.get('/quote2', (req, res) => {
    res.render('quote2');
});

//Route 4: Quote 3
server.get('/quote3', (req, res) => {
    res.render('quote3');
});

//Route 5: Quote 4
server.get('/quote4', (req, res) => {
    res.render('quote4');
});

//Route 6: Quote 5
server.get('/quote5', (req, res) => {
    res.render('quote5');
});

//Route 7: Quote 6
server.get('/quote6', (req, res) => {
    res.render('quote6');
});

//Route 8: Quote 7
server.get('/quote7', (req, res) => {
    res.render('quote7');
});

//Route 9: Quote 8
server.get('/quote8', (req, res) => {
    res.render('quote8');
});

//Route 10: Quote 9
server.get('/quote9', (req, res) => {
    res.render('quote9');
});


/*in theory, should be a quicker way to render the routes instead of the above: 

routes.forEach((routes) => {
    server.get(route.URL, (req, res) => {
        res.render(route.URL.slice(1));
    });
}); 
*/