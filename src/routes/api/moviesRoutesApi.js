const express = require('express');
const router = express.Router();
const moviesControllerApi = require('../../controllers/apis/moviesControllerApi');

router.get('/api/movies', moviesControllerApi.list);
router.get('/api/movies/detail/:id', moviesControllerApi.detail);
router.post('/api/movies/create', moviesControllerApi.create);
router.delete('/api/movies/delete/:id', moviesControllerApi.delete);
router.put('/api/movies/update/:id', moviesControllerApi.update);



module.exports = router;