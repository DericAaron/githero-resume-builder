const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//add routes
router.get('/', (req, res) => {
    console.log('In project Get Request' , req.user.id);
    const id = req.user.id;

    //narrow return later
    queryText = `SELECT project_name, image_url, website_url, git_repo, rawcode, description, show_hide FROM project
                JOIN profile ON project.profile_id = profile.id
                JOIN person ON profile.user_id = person.id
                WHERE person.id=$1`;
    pool.query(queryText, [id])
        .then( (response) => {
            res.send(response.rows);
        })
        .catch( (err) => {
            console.log('Error in get projects');
            res.sendStatus(500);
        }); 
}); //end get projects



router.post('/', (req, res) => {
    const project = req.body;
    console.log('recieved:', req.body);

    const queryText = `INSERT INTO project (profile_id, project_name, image_url, website_url, git_repo, rawcode, description)
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
}); //end post projects

router.put('/:id', (req, res) => {
    console.log('In Project Put Request');
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    console.log('In project delete request');
    res.sendStatus(200);
});

module.exports = router;