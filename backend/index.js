import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/logindb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected");
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

//Routes
app.post("/login", (req, res)  => {
    res.send("My API Login");
});

app.post("/register", (req, res)  => {
    res.send("My API Register");
});

app.listen(1234,() => {
    console.log("DB started at port 9002");
})