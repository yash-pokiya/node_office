require("dotenv").config();
//dependencies
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routs");
const path = require("path")
const morgan = require("morgan")
// Middlewares
app.use(cookieParser())
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set("view engine" , "ejs")
app.use(express.static(path.join(__dirname , "public")))
//Routes
app.use("/" , userRoutes );

app.listen(port, () => {
  console.log(`server run at port ${port}`);
  console.log(`http://localhost:${port}/`);
});
