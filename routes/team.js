var express= require('express'),
    router = express.Router(),
    Team = require('../models/team');

// Returns all teams
router.get('/', function(req, res) {
    Team.find().exec(function(error, teams){
        
        if(error) { // Error
            return res.status(500).json({
                message: 'Error',
                error: error
            });
        }

        res.status(200).json({ // Success
            message: 'Success',
            obj: teams
        });

    });
});

// Adds new team
router.post('/', function(req, res) {
    
    var team = new Team({
        name: req.body.name,
        championships: req.body.championships,
        year: req.body.year
    });

    team.save(function(error, team) {

        if(error) { // Error
            return res.status(500).json({
                message: 'Error',
                error: error
            });
        }

        res.status(201).json({ // Success
            message: 'Team added successfully',
            obj: team
        });

    });

});

// Deletes a team
router.delete('/:id', function(req, res) {
    Team.findById(req.params.id, function(error, team){

        if(error) { // Error
            return res.status(500).json({
                message: 'Error',
                error: error
            });
        }

        if(!team) { // Error message not found
            return res.status(500).json({
                message: 'Error: Team not found',
                error: error
            });
        }

        // Success
        team.remove(function(error, result){

            if(error) { // Error
                return res.status(500).json({
                    message: 'Error',
                    error: error
                });
            }
            
            res.status(200).json({ // Success
                message: 'Team Deleted',
                obj: result
            });

        });
    });
});

module.exports = router;