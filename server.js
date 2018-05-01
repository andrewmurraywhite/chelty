const express = require("express")
const app = express()

app.get('/',(req, res) => res.send("Hello Andy!"))

// http://localhost:3000/
app.listen(3000, () => console.log("Am ristening"))