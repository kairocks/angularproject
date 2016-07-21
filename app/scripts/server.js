// server.js
             
var express = require('express');

var app = module.exports = express();

app.configure(function(){ 
  // Here we require the prerender middleware that will handle requests from Search Engine crawlers 
  // We set the token only if we're using the Prerender.io service 
  app.use(require('prerender-node').set('prerenderToken', '2rXtEDGLMsDLnlGl7zMT')); 
  app.use(express.static("app")); app.use(app.router); 
});

// This will ensure that all routing is handed over to AngularJS 
app.get('*', function(req, res){ 
  res.sendfile('./app/index.html'); 
});

app.listen(8081); 
console.log("Go Prerender Go!");
/*// In our app.js configuration
app.use(function(req, res, next)
{
var fragment = req.query._escaped_fragment_;
// If there is no fragment in the query params
// then we're not serving a crawler
if (!fragment) return next();

// If the fragment is empty, serve the
// index page

if (fragment === "" || fragment === "/")
fragment = "/index.html";

// If fragment does not start with '/'
// prepend it to our fragment
if (fragment.charAt(0) !== "/")
fragment = '/' + fragment;

// If fragment does not end with '.html'
// append it to the fragment
if (fragment.indexOf('.html') == -1) fragment += ".html";

// Serve the static html snapshot
try {
var file = __dirname + "/snapshots" + fragment; res.sendfile(file);
} catch (err) { res.send(404);}
});
*/