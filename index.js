const express = require("express");
const routes = require("./src/routers/urlReplaceWithValueRouter")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// simple route
app.use(routes)

const PORT = 8090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})