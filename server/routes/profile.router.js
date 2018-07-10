const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//add routes
router.get('/', (req, res) => {
    console.log('In profile Get Request');
    res.sendStatus(200);
});

router.post('/', (req, res) => {
    console.log('In profile post request');
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    console.log('In profile Put Request');
});

router.delete('/:id', (req, res) => {
    console.log('In profile delete request');
});

module.exports = router;