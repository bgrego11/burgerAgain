var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
//   app.get("/", function(req, res) {
// //     res.sendFile(path.join(__dirname, "../public/blog.html"));
// //   });

  // Route to the cms page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // blog route loads blog.html
  

 

};
