const express = require('express');
const router = express.Router();
const genresControllerApi = require('../../controllers/apis/genresControllerApi');

router.get('/api/genres', genresControllerApi.list);
router.get('/api/genres/detail/:id', genresControllerApi.detail);



module.exports = router;