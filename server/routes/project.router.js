const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//add routes
router.get('/', (req, res) => {
    console.log('In project Get Request' , req.user.id);
    const id = req.user.id;

    //narrow return later
    queryText = `SELECT project.id, project_name, image_url, website_url, git_repo, rawcode, description, show_hide FROM project
                JOIN profile ON project.profile_id = profile.id
                JOIN person ON profile.user_id = person.id
                WHERE person.id=$1 ORDER BY id`;
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
        });
}); //end post projects

router.put('/', (req, res) => {
    const project = req.body;
    const queryText = `UPDATE project SET show_hide=$1 WHERE id=$2`;

    pool.query(queryText, [project.show_hide, project.id])
        .then( (result) => {
            res.sendStatus(200);
        })
        .catch( (err) => {
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    console.log('In project delete request', req.params.id);

    const id = req.params.id;
    const queryText = 'DELETE FROM project WHERE id=$1';
    pool.query(queryText, [id])
        .then( () => {
            res.sendStatus(200);
        })
        .catch( () => {
            res.sendStatus(500);
        });
});

module.exports = router;