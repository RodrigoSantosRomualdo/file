const { Router } = require("express");
const router = Router();

const { compareText } = require('../controllers/compare.controller')


router.post('/', compareText);

module.exports = router;
