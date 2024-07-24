const express = require('express');
const router = express.Router();
const actorsControllerApi = require('../../controllers/apis/actorsControllerApi');

router.post('/api/actors', actorsControllerApi.list);
router.delete('/api/actors/detail/:id', actorsControllerApi.detail);



module.exports = router;