const express = require("express");
const app = express();

const auth_routes = require("./routes/auth.routes")


app.use(auth_routes);



// 404 handling 
app.use((req, res) => {
  res.json({
    status: false,
    result: null,
    message: "404 page not found !!!",
    meta: null,
  });
});

// app.post("/brand", (req, res) => {
//   let brand = req.params.brand;
//   let query = req.query;
//   res.json({
//     result: {
//       brand: brand,
//     },
//     status: true,
//     message: "list of brand",
//     meta: null,
//   });
// });

// app.get("/brand/:brand_id", (req, res) => {
//   let id = req.params.brand_id;
//   let query = req.query;
//   res.json({
//     result: {
//       brand_id: id,
//       query: query
//     },
//     status: true,
//     message: "brand sdfalksdjfk;l ",
//     meta: null,
//   });
// });

app.listen("3005", "localhost", (err) => {
  if (err) {
    console.log("Error Listening to port: 3005");
  } else {
    console.log("Server is running at port 3005");
    console.log("Press CTRL+C to disconnect the server");
  }
});
