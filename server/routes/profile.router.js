const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//add routes
router.get('/', (req, res) => {
    console.log('In profile Get Request');
    const queryText = 'SELECT id, resume_name, github_name, email, bio FROM profile WHERE user_id=$1';

    pool.query(queryText, [req.user.id])
        .then( (result) => {
            res.send(...result.rows);
        })
        .catch( (err) => {
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    console.log('In profile Put Request');
    const profile = req.body;
    const queryText = `UPDATE profile SET resume_name=$1, github_name=$2, email=$3, bio=$4 WHERE id=$5`;

    pool.query(queryText, [profile.resume_name, profile.github_name, profile.email, profile.bio, profile.id])
        .then( (result)=> {
            res.sendStatus(200);
        })
        .catch( (err)=> {
            console.log('Error updating server');
            
            res.sendStatus(500);
        });
});

module.exports = router;