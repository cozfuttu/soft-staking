const express = require("express");
const { getNftDbData } = require("./controllers");

const router = express.Router();

router.use("/getNftDbData", getNftDbData);

exports.apiRoutes = router;
