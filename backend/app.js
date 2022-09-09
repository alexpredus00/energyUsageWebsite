const express = require("express");
const cors = require("cors");
const Post = require("./src/models/Post");
require("./src/db/connection");

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/additem", async (req, res) => {
  console.log(req.body)
  try {
    req.body.forEach(async (items) => {

   const a =  await Post.findOneAndUpdate({ _id: items._id }, items, {
      new: true,
      upsert: true, 
    });
    });
    res.status(200).json({ message: "okay" });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong! Please try again." });
  }
});

app.get("/api/getitems", async (req, res) => {
  const a = await Post.find({});
  res.status(200).json(a);
});
app.listen(port, () => {
  console.log("Application is running on port:", port);
});
