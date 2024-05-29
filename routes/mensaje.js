const express = require("express");
const router = express.Router();
const controller = require('../controllers/mensajeController');


const {
    createMensaje,
    updateMensaje,
    getMensaje
} = controller;

router.get('/:id',getMensaje);
router.post('/',createMensaje);

router.route('/:id').put(updateMensaje);

module.exports = router;




