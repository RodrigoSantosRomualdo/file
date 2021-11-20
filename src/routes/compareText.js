const { Router } = require("express");
const router = Router();

const { compareText } = require('../controllers/compare.controller')

//router.get("/:trackID", getCompare);

router.post('/', compareText);

module.exports = router;
