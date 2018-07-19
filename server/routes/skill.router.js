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
    const project = req.body;
    console.log('recieved:', req.body);

    res.sendStatus(200);
    // const queryText = `INSERT INTO project (profile_id, project_name, image_url, website_url, git_repo, rawcode, description)
    //                     VALUES($1, $2 ,$3 ,$4 ,$5 ,$6 ,$7)`;

    // pool.query(queryText, [project.profile_id, project.project_name, project.image_url, project.website_url, project.git_repo, project.rawcode, project.description])
    //     .then( (response) => {
    //         res.sendStatus(200);
    //     })
    //     .catch( (err) => {
    //         console.log('Error in post project');
    //         res.sendStatus(500);
    //     });
}); //end post projects

router.post('/existing', (req, res) => {
    const project = req.body;
    const queryText = `UPDATE project SET show_hide=$1 WHERE id=$2`;

    res.sendStatus(200);
    // pool.query(queryText, [project.show_hide, project.id])
    //     .then( (result) => {
    //         res.sendStatus(200);
    //     })
    //     .catch( (err) => {
    //         res.sendStatus(500);
    //     });
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