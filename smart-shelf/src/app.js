const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path=require("path");
const app = express();
const resourceRoutes = require("./routes/resourceRoutes");
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/resources", resourceRoutes);

app.use(express.static(path.join(__dirname,'..', "public")));

app.get("/", (req, res) => {
    res.json({
        message: "Smart Shelf API is running"
    });
});


app.get('/api/test',(req,res)=> {
    res.json({
        message:"Smart shelf api is working!.."
    })
})
module.exports = app;