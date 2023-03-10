const router = require("express").Router();
const controller = require("../controller/controller")

router.get("/script", async (req, res) => {

    let result = await controller.apiResponse(req, res);

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    res.send(result);

})

module.exports = router