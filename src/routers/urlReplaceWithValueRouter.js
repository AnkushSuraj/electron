const router = require("express").Router();

router.post("/", async(req, res) => {
    let body = req.body;
    
    res.status(200).send(body)


})

module.exports = router