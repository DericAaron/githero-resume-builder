const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//get skills for profile
router.get('/profile/:id', (req, res) => {
    console.log('In skill Get Request' , req.params.id);
    const id = req.params.id;
    const queryText = `SELECT skill_joiner.id, skill.skill FROM skill
                    JOIN skill_joiner ON skill_joiner.skill_id = skill.id
                    WHERE skill_joiner.profile_id=$1 ORDER BY id`;
    pool.query(queryText, [id])
        .then( (response) => {
            res.send(response.rows);
        })
        .catch( (err) => {
            console.log('Error in get skills');
            res.sendStatus(500);
        }); 
}); //end get skills

//get all skills in db
router.get('/all', (req, res) => {
    console.log('In skill Get Request ALL');
    const queryText = `SELECT * FROM skill`;
    pool.query(queryText)
        .then( (response) => {
            res.send(response.rows);
        })
        .catch( (err) => {
            console.log('Error in get skills', err);
            res.sendStatus(500);
        }); 
}); //end get all skills



router.post('/new', (req, res) => {
    const skill = req.body.name;
    const id = req.body.pid
    console.log('recieved:', req.body);

    const queryText = `INSERT INTO skill (skill)
                        VALUES($1) RETURNING id`;

    pool.query(queryText, [skill])
        .then( (response) => {
            const queryTwo = `INSERT INTO skill_joiner (profile_id, skill_id)
            VALUES($1, $2)`;
            pool.query(queryTwo, [id, response.rows[0].id])
                .then( (result) => {
                    res.sendStatus(200);
                })
                .catch( (err) => {
                    res.sendStatus(500);
                });
        })
        .catch( (err) => {
            res.sendStatus(500);
        });
}); //end post new skills

router.post('/existing', (req, res) => {
    const skill = req.body.sid;
    const id = req.body.pid;
    const queryText = `INSERT INTO skill_joiner (profile_id, skill_id)
                        VALUES($1, $2)`;
    pool.query(queryText, [id, skill])
        .then( (result) => {
            res.sendStatus(200);
        })
        .catch( (err) => {
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('In project delete request', req.params.id);

    res.sendStatus(200);
    // const id = req.params.id;
    // const queryText = 'DELETE FROM project WHERE id=$1';
    // pool.query(queryText, [id])
    //     .then( () => {
    //         res.sendStatus(200);
    //     })
    //     .catch( () => {
    //         res.sendStatus(500);
    //     });
});

module.exports = router;