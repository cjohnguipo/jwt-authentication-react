const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));


app.listen(5000, () => {
  console.log("Listening on port 5000");
});

module.exports = app