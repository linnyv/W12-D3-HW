const express = require("express");

const server = express();
const PORT = process.env.PORT || 3009

//View engine
server.set("view engine", "ejs");

server.use(express.static(__dirname + '/public'));

const routes = [
    { url: "/home", label: "Home" },
    { url: "/quote1", label: "Quote 1" },
    { url: "/quote2", label: "Quote 2" },
    { url: "/quote3", label: "Quote 3" },
    { url: "/quote4", label: "Quote 4" },
    { url: "/quote5", label: "Quote 5" },
    { url: "/quote6", label: "Quote 6" },
    { url: "/quote7", label: "Quote 7" },
    { url: "/quote8", label: "Quote 8" },
    { url: "/quote9", label: "Quote 9" },
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

server.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"})
});

server.listen(PORT, ()=>{
    console.log(`Server is listening at: ${PORT}`)
});

/*in theory, should be a quicker way to render the routes instead of the above: 

routes.forEach((routes) => {
    server.get(route url, (req, res) => {
        res.render(route url.slice(1));
    });
}); 
*/