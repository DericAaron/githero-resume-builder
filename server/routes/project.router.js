const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//add routes
router.get('/', (req, res) => {
    console.log('In project Get Request');
    res.sendStatus(200);
});

router.post('/', (req, res) => {
    const project = req.body;
    console.log('recieved:', req.body);

    const queryText = `INSERT INTO project (profile_id, project_name, image_url, website_url, git_repo, rawCode, description)
                        VALUES($1, $2 ,$3 ,$4 ,$5 ,$6 ,$7)`;

    pool.query(queryText, [project.profile_id, project.project_name, project.image_url, project.website_url, project.git_repo, project.rawCode, project.description])
        .then( (response) => {
            res.sendStatus(200);
        })
        .catch( (err) => {
            console.log('Error in post project');
            res.sendStatus(500);
        })
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