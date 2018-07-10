const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//add routes
router.get('/', (req, res) => {
    console.log('In project Get Request');
    res.sendStatus(200);
});

router.post('/', (req, res) => {
    console.log('In project post request');
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    console.log('In Project Put Request');
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    console.log('In project delete request');
    res.sendStatus(200);
});

module.exports = router;